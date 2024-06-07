import axios from "axios";
import { GetInitialUserList } from "../Services/GetInitialUserList";
import "jest-localstorage-mock";

describe("Test getInitialUsers function", () => {
  it("should get users from mocked API", async () => {
    const users = await GetInitialUserList();
    expect(users).toHaveLength(3);
  });

  it("should get an empty array when failing", async () => {
    jest
      .spyOn(axios, "get")
      .mockImplementationOnce(() => Promise.reject("SomeError"));
    const users = await GetInitialUserList();
    expect(users).toHaveLength(0);
  });
});
