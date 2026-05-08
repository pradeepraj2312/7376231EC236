import axios from "axios";

import { token } from "../notification_app_fe/src/App";
/**
 * Reusable logging function for Affordmed evaluation
 * @param {string} stack - "backend" or "frontend"
 * @param {string} level - "debug" | "info" | "warn" | "error" | "fatal"
 * @param {string} pkg - package name (e.g., "controller", "db", "component")
 * @param {string} message - descriptive log message
 * @param {string} token - Bearer token from authentication API
 */
export async function Log(stack, level, pkg, message, token) {
  try {
    const res = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Log created successfully:", res.data);
  } catch (err) {
    console.error("Logging failed:", err.message);
  }
}
