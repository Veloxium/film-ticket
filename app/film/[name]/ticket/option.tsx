
import useFetchAPI from "@/app/api/fecthapi";

interface OptionProps {
  index: number;
  selectedIndex?: number;
  onSelect: (index: number) => void;
  children: React.ReactNode;
}

const Option = (props: OptionProps) => {
  const isSelected = props.index === props.selectedIndex;


  return (
    <div className="flex-col">
      <div
        className={`flex items-center shadow cursor-pointer transition duration-300 bg-slate-50 mx-2 rounded-md  flex-1 text-xs text-slate-500 lg:font-normal lg:text-sm hover:shadow-md ${
          isSelected && "bg"
        }`}
        onClick={() => props.onSelect(props.index)}
      >
        <div
          className={`transition px-8 py-2 rounded-lg font-bold  ${
            isSelected && "bg text-slate-800"
          } `}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Option;
