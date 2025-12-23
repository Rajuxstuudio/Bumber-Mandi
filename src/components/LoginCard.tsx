import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import WheatLogo from "./WheatLogo";

const LoginCard = () => {
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { countryCode, phoneNumber });
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

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
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
              <SelectItem value="+1">+1</SelectItem>
              <SelectItem value="+44">+44</SelectItem>
              <SelectItem value="+971">+971</SelectItem>
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
            disabled={phoneNumber.length < 10}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
