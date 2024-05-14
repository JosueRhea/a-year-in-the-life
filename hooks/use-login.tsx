import { useState } from "react";
import { useInput } from "./use-input";
import { createClient } from "@/supabase/client";
import { toast } from "sonner";

export function useLogin() {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const username = useInput({});
  const email = useInput({});
  const otp = useInput({});
  const client = createClient();

  const checkAvailability = async () => {
    setLoading(true);
    const { data, error } = await client
      .from("profiles")
      .select()
      .eq("username", username.value);
    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    if ((data?.length ?? 0) > 0) {
      toast.error(`${username.value} is already taken`);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const sendOTP = async () => {
    setLoading(true);
    const data = await client.auth.signInWithOtp({
      email: email.value,
      options: {
        shouldCreateUser: true,
      },
    });

    setLoading(false);

    if (data.error) {
      toast.error(data.error.message);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const verifyOTP = async () => {
    setLoading(true);
    const { error, data } = await client.auth.verifyOtp({
      email: email.value,
      token: otp.value,
      type: "email",
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    if (!data.user) {
      toast.error("User not found");
      return;
    }

    const response = await client
      .from("profiles")
      .update({ username: username.value })
      .eq("id", data.user.id);

    if (response.error) {
      toast.error(response.error.message);
      return;
    }
    toast.success("You're logged in!");
    window.location.reload();
  };

  return {
    currentStep,
    setCurrentStep,
    username,
    email,
    otp,
    checkAvailability,
    loading,
    sendOTP,
    verifyOTP,
  };
}
