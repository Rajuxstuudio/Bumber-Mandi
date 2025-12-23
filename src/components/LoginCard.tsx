import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import WheatLogo from "./WheatLogo";
import { useToast } from "@/hooks/use-toast";

const VALID_OTP = "9680";

const LoginCard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Validate Indian phone number (10 digits, starts with 6-9)
  const isValidIndianPhone = (phone: string) => {
    const cleanPhone = phone.replace(/\s|-/g, "");
    return /^[6-9]\d{9}$/.test(cleanPhone);
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phoneNumber.replace(/\s|-/g, "");
    
    if (!isValidIndianPhone(cleanPhone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    // Simulate OTP sending
    setTimeout(() => {
      setIsLoading(false);
      setStep("otp");
      toast({
        title: "OTP Sent",
        description: `OTP sent to ${countryCode} ${phoneNumber}`,
      });
    }, 1000);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (otp.length !== 4) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a 4-digit OTP.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      if (otp === VALID_OTP) {
        toast({
          title: "Login Successful",
          description: "Welcome to Bumper Mandi!",
        });
        navigate("/dashboard");
      } else {
        toast({
          title: "Invalid OTP",
          description: "The OTP you entered is incorrect. Please try again.",
          variant: "destructive",
        });
        setOtp("");
      }
    }, 1000);
  };

  const handleBackToPhone = () => {
    setStep("phone");
    setOtp("");
  };

  return (
    <div className="w-full max-w-sm bg-card rounded-2xl shadow-xl p-8 border border-border">
      {/* Logo */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-3">
          <WheatLogo className="text-gold" size={45} />
        </div>
        <p className="text-muted-foreground text-sm">
          Welcome to <span className="text-foreground font-semibold">Bumper Mandi</span>
        </p>
      </div>

      {step === "phone" ? (
        /* Phone Number Form */
        <form onSubmit={handlePhoneSubmit} className="space-y-4">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-2">LOGIN</h2>
            <p className="text-muted-foreground text-sm">
              Enter your Mobile number. We will send you an OTP there.
            </p>
          </div>

          <div className="flex gap-2">
            <Select value={countryCode} onValueChange={setCountryCode}>
              <SelectTrigger className="w-24 bg-background border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+91">+91</SelectItem>
              </SelectContent>
            </Select>
            
            <Input
              type="tel"
              placeholder="00000 - 00000"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="flex-1 bg-background border-border"
              maxLength={12}
            />
          </div>

          <p className="text-xs text-muted-foreground">
            By Continuing, you agree to the{" "}
            <a href="#" className="text-foreground font-semibold hover:underline">
              T&C
            </a>{" "}
            and{" "}
            <a href="#" className="text-foreground font-semibold hover:underline">
              Privacy policy.
            </a>
          </p>

          <div className="pt-16">
            <p className="text-center text-xs text-muted-foreground mb-4">
              Powered by <span className="font-semibold text-foreground">hummingwave technologies.</span>
              <br />
              Version 1.0.0
            </p>
            
            <Button
              type="submit"
              className="w-full bg-muted text-muted-foreground hover:bg-gold hover:text-navy transition-colors duration-300"
              disabled={phoneNumber.replace(/\s|-/g, "").length < 10 || isLoading}
            >
              {isLoading ? "Sending OTP..." : "Next"}
            </Button>
          </div>
        </form>
      ) : (
        /* OTP Form */
        <form onSubmit={handleOtpSubmit} className="space-y-4">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-2">VERIFY OTP</h2>
            <p className="text-muted-foreground text-sm">
              Enter the 4-digit OTP sent to {countryCode} {phoneNumber}
            </p>
          </div>

          <div className="flex justify-center py-4">
            <InputOTP
              maxLength={4}
              value={otp}
              onChange={setOtp}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} className="w-12 h-12 text-lg" />
                <InputOTPSlot index={1} className="w-12 h-12 text-lg" />
                <InputOTPSlot index={2} className="w-12 h-12 text-lg" />
                <InputOTPSlot index={3} className="w-12 h-12 text-lg" />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <button
            type="button"
            onClick={handleBackToPhone}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Change phone number
          </button>

          <div className="pt-8">
            <p className="text-center text-xs text-muted-foreground mb-4">
              Powered by <span className="font-semibold text-foreground">hummingwave technologies.</span>
              <br />
              Version 1.0.0
            </p>
            
            <Button
              type="submit"
              className="w-full bg-muted text-muted-foreground hover:bg-gold hover:text-navy transition-colors duration-300"
              disabled={otp.length !== 4 || isLoading}
            >
              {isLoading ? "Verifying..." : "Verify & Login"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginCard;
