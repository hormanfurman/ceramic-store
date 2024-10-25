import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { ProductOption } from "../../types/product";

type OptionSelectorProps = {
  option: ProductOption;
  value: string;
  onChange: (value: string) => void;
};

export function OptionSelector({
  option,
  value,
  onChange,
}: OptionSelectorProps) {
  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger
        className="w-full flex items-center justify-between px-4 py-2.5
                   border border-gray-300 rounded-lg bg-white text-gray-900
                   hover:border-gray-400 focus:outline-none focus:ring-2
                   focus:ring-black focus:ring-offset-2"
      >
        <Select.Value />
        <Select.Icon>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white rounded-lg shadow-lg border">
          <Select.Viewport className="p-1">
            {option.values.map((optionValue) => (
              <Select.Item
                key={optionValue}
                value={optionValue}
                className="relative flex items-center h-10 px-4 rounded
                          text-sm text-gray-900 select-none hover:bg-gray-100
                          focus:bg-gray-100 focus:outline-none cursor-pointer"
              >
                <Select.ItemText>{optionValue}</Select.ItemText>
                <Select.ItemIndicator className="absolute right-4">
                  <Check className="w-4 h-4" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
