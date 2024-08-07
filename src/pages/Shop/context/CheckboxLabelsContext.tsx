import { createContext, useState } from "react";

interface CheckedState {
  everything: boolean;
  cakes: boolean;
  puddings: boolean;
  candies: boolean;
}

interface CheckedContextInterface {
  checked: CheckedState;
  setChecked: (newChecked: CheckedState) => void;
}

const initialState: CheckedState = {
  everything: true,
  cakes: false,
  puddings: false,
  candies: false,
};

export const CheckboxLabelsContext = createContext<CheckedContextInterface>({
  checked: initialState,
  setChecked: () => {},
});

export const CheckboxLabelsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [checked, setChecked] = useState<CheckedState>(initialState);

  return (
    <CheckboxLabelsContext.Provider value={{ checked, setChecked }}>
      {children}
    </CheckboxLabelsContext.Provider>
  );
};