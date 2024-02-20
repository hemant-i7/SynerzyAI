import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row", // Set to row to align buttons side by side
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#1f2937", // Background color
        color: "#f3f4f6", // Text color
        fontFamily: "Montserrat, sans-serif", // Montserrat font
      }}
    >
      <Link href="/sign-in">
        <Button
          style={{
            background: "rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            padding: "1.5rem 3rem", // Increased padding for bigger size
            border: "none",
            color: "#f3f4f6", // Text color
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            fontSize: "1.5rem", // Increased font size for bigger size
            margin: "0.5rem",
          }}
        >
          Login
        </Button>
      </Link>
      <Link href="/sign-up">
        <Button
          style={{
            background: "rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            padding: "1.5rem 3rem", // Increased padding for bigger size
            border: "none",
            color: "#f3f4f6", // Text color
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            fontSize: "1.5rem", // Increased font size for bigger size
            margin: "0.5rem",
          }}
        >
          Register
        </Button>
      </Link>
    </div>
  );
};

export default LandingPage;
