import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SearchSelectProps<T> {
    placeholder: string;
    onSearch: (query: string) => Promise<T[]>;
    onSelect: (item: T) => void;
    onRemove: (item: T) => void;
    selectedItems: T[];
    renderItem: (item: T) => React.ReactNode;
    renderResult: (item: T) => React.ReactNode;
}

export function SearchSelect<T extends { id: string }>({
    placeholder,
    onSearch,
    onSelect,
    onRemove,
    selectedItems,
    renderItem,
    renderResult,
}: SearchSelectProps<T>) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<T[]>([]);
    const [loading, setLoading] = useState(false);

    // Simple debounce implementation inside useEffect
    useEffect(() => {
        const timer = setTimeout(async () => {
            if (query.length > 2) {
                setLoading(true);
                try {
                    const data = await onSearch(query);
                    setResults(data);
                } catch (error) {
                    console.error("Search error", error);
                } finally {
                    setLoading(false);
                }
            } else {
                setResults([]);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [query, onSearch]);

    return (
        <div className="w-full space-y-4">
            {/* Selected Items Area */}
            {selectedItems.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {selectedItems.map((item) => (
                        <div key={item.id} className="relative group">
                            {renderItem(item)}
                            <button
                                onClick={() => onRemove(item)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <span className="material-symbols-outlined text-[16px] block">close</span>
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Search Input */}
            <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground material-symbols-outlined">
                    search
                </span>
                <Input
                    placeholder={placeholder}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pl-10"
                />
            </div>

            {/* Results Dropdown/Area */}
            {query.length > 2 && (
                <div className="border border-border rounded-md bg-background shadow-md mt-2">
                    {loading ? (
                        <div className="p-4 text-center text-muted-foreground">Aranıyor...</div>
                    ) : results.length > 0 ? (
                        <ScrollArea className="h-64">
                            <div className="p-2 grid grid-cols-1 gap-2">
                                {results.map((item) => {
                                    const isSelected = selectedItems.some((i) => i.id === item.id);
                                    return (
                                        <div
                                            key={item.id}
                                            onClick={() => !isSelected && onSelect(item)}
                                            className={`p-2 rounded-md flex items-center gap-3 cursor-pointer transition-colors ${isSelected
                                                ? "opacity-50 cursor-default bg-muted"
                                                : "hover:bg-accent hover:text-accent-foreground"
                                                }`}
                                        >
                                            {renderResult(item)}
                                            {isSelected && (
                                                <span className="ml-auto material-symbols-outlined text-primary-app">check_circle</span>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </ScrollArea>
                    ) : (
                        <div className="p-4 text-center text-muted-foreground">Sonuç bulunamadı.</div>
                    )}
                </div>
            )}
        </div>
    );
}
