"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data: session } = useSession();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div>
      <div style={{ paddingBottom: 40 }}>
        <h2>Login State</h2>
        {session ? (
          <div data-testid="loggedInUser">
            <p>User is logged in.</p>
            <button onClick={() => signOut()}>Logout</button>
          </div>
        ) : (
          <div>
            <p>User is not logged in</p>
          </div>
        )}
      </div>
      {!session && (
        <form onSubmit={handleSubmit} style={{ paddingBottom: 10 }}>
          <div style={{ paddingBottom: 10 }}>
            <label>Email</label>
            <input
              data-testid="emailTestId"
              type="text"
              name="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="nameImput"
              placeholder="Name"
            />
          </div>
          <div style={{ paddingBottom: 10 }}>
            <label>Password</label>
            <input
              data-testid="passwordTestId"
              name="Password"
              type="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="emailImput"
              placeholder="email@domain.com"
            />
          </div>
          <button type="submit" data-testid="submitFormTestId">
            Submit Form
          </button>
        </form>
      )}
    </div>
  );
};
export default LoginForm;
