export type SelectOption = {
  title: string;
  value: OptionValue;
};

export type OptionValue = string;

export type ChangeEvent = {
  value: OptionValue | null;
};

export type ChangeEventHandler = (event: ChangeEvent) => void;
