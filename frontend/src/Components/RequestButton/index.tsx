import Spinner from "../Spinner";
import { RequestButtonWrapper } from "./styles";

export interface RequestButtonProps {
  isLoading: boolean;
  type: string;
  text: string;
  isEnabled: boolean;
}

const RequestButton = ({ isLoading, text, isEnabled }: RequestButtonProps) => {
  return (
    <RequestButtonWrapper isEnabled={isEnabled}>
      {isLoading ? <Spinner /> : text}
    </RequestButtonWrapper>
  );
};

export default RequestButton;
