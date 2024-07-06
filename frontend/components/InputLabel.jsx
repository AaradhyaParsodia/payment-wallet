
export default function InputLabel({
    labelText,
    labelFor,
    inputFor,
    inputId,
    inputType,
    placeholder,
    onChange,
    labelCustomClass,
    inputCustomClass
}) {
    const labelDefaultClass = "block mb-2 text-sm font-medium";
    const inputDefaultClass = "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-neutral-200";
  return (
    // <div className="">
    <div className="mb-5">
        <label
            htmlFor={labelFor}
            className={labelDefaultClass + labelCustomClass}
        >
            {labelText}
        </label>
        <input
            onChange={onChange}
            placeholder={placeholder}
            htmlFor={inputFor}
            type={inputType}
            id={inputId}
            className={inputDefaultClass + inputCustomClass}
        />
    </div>
    // </div>
  );
}
