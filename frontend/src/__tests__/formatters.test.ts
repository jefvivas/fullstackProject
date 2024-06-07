import { formatCpf, formatPhone } from "../Utils/Formatters";
describe("testing cpf formatter", () => {
  it("should return a well formatted cpf when receiving one", () => {
    const validCpf = formatCpf("15482310701");
    expect(validCpf).toBe("154.823.107-01");
  });

  it("should return a non formatted cpf when receiving an invalid cpf", () => {
    const invalidCpf = formatCpf("1548231075");
    expect(invalidCpf).toBe("1548231075");
  });
});

describe("testing phone formatter", () => {
  it("should return a well formatted phone when receiving one", () => {
    const validPhone = formatPhone("21995839259");
    expect(validPhone).toBe("(21) 99583-9259");
  });

  it("should return false when receiving an invalid cpf", () => {
    const invalidPhone = formatPhone("219958392");
    expect(invalidPhone).toBe("219958392");
  });
});
