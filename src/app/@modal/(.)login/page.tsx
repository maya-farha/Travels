
import AuthForm from "@/app/Components/AuthForm";
import AuthModalLayout from "@/app/Components/AuthModal";

export default function LoginPage() {
      const loginInputs = [
            { label: "Email Address", name: "email", type: "email" as const, placeholder: "Enter your email" },
            { label: "Password", name: "password", type: "password" as const, placeholder: "Enter your password" },
      ];

      return (
            <AuthModalLayout>
                  <AuthForm mode="login" inputs={loginInputs} />
            </AuthModalLayout>
      );
}