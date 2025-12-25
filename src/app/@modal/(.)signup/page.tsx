import AuthForm from "@/app/Components/AuthForm";
import AuthModalLayout from "@/app/Components/AuthModal";


export default function SignupPage() {
      const signupInputs = [
            { label: "Name and Surname", name: "name", type: "text" as const, placeholder: "Enter your name and surname" },
            { label: "Email Address ", name: "email", type: "email" as const, placeholder: "Enter your email address" },
            { label: "Password", name: "pass", type: "password" as const, placeholder: "Enter your password" },
      ];

      return (
            <AuthModalLayout>
                  <AuthForm mode="signup" inputs={signupInputs} />
            </AuthModalLayout>
      );
}