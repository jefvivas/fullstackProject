import { logAdmin } from "../Services/logAdmin";
import axios from "axios";

describe("Test logAdmin function", () => {
  const adminInput = {
    email: "someMail",
    password: "passwd",
  };

  it("should log the admin", async () => {
    axios.post = jest.fn().mockResolvedValue({ data: { token: "token" } });
    const receivedToken = await logAdmin({
      email: adminInput.email,
      password: adminInput.password,
    });

    expect(receivedToken).toEqual("token");
  });

  it("should not log the admin", async () => {
    axios.post = jest.fn().mockRejectedValue(new Error("Error"));

    const response = await logAdmin({
      email: adminInput.email,
      password: adminInput.password,
    });

    expect(response).toEqual("");
  });
});
