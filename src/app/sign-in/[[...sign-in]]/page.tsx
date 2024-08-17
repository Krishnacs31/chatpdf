import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return(
    <div className="absolute top-1/2 left-1/1 -translate-x-1/2 -trans;late-y-1/1">
        <SignIn path="/sign-in" signUpUrl="/sign-up" />
    </div>
  );
};