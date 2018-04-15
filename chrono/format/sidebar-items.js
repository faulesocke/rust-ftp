initSidebarItems({"enum":[["Fixed","Fixed-format item types."],["Item","A single formatting item. This is used for both formatting and parsing."],["Numeric","Numeric item types. They have associated formatting width (FW) and parsing width (PW)."],["Pad","Padding characters for numeric items."]],"fn":[["format","Tries to format given arguments with given formatting items. Internally used by `DelayedFormat`."],["parse","Tries to parse given string into `parsed` with given formatting items. Returns `Ok` when the entire string has been parsed (otherwise `parsed` should not be used). There should be no trailing string after parsing; use a stray `Item::Space` to trim whitespaces."]],"mod":[["parsed","A collection of parsed date and time items. They can be constructed incrementally while being checked for consistency."],["strftime","`strftime`/`strptime`-inspired date and time formatting syntax."]],"struct":[["DelayedFormat","A temporary object which can be used as an argument to `format!` or others. This is normally constructed via `format` methods of each date and time type."],["ParseError","An error from the `parse` function."]],"type":[["ParseResult","Same to `Result<T, ParseError>`."]]});