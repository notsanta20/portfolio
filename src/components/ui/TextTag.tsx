function TextTag({ text }: { text: string }) {
  return (
    <div className="text-xs font-(family-name:--font-mono) text-(--gray-light) bg-(--gray-dark) rounded-lg py-1 px-2 cursor-default">
      {text}
    </div>
  );
}

export default TextTag;
