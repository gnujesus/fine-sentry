import { View, FlatList, useWindowDimensions } from "react-native";
import React, { useState, useMemo } from "react";
import FineCard from "./FineCard";
import SearchBar from "./SearchBar";

interface Props {
  data: Fine[];
}

export default function FineGrid({ data }: Props) {
  const [query, setQuery] = useState("");

  // Memoized filtered data
  const filteredData = useMemo(() => {
    const q = query.toLowerCase();
    return data.filter((item) =>
      `${item.brand} ${item.model} ${item.color} ${item.infraction_type}`
        .toLowerCase()
        .includes(q)
    );
  }, [query, data]);

  return (
    <FlatList
      data={filteredData}
      renderItem={({ item }) => <FineCard fine={item} grid />}
      numColumns={2}
      keyExtractor={(item) => String(item.id)}
      columnWrapperStyle={{ gap: 20 }}
      contentContainerStyle={{ paddingTop: 30, gap: 30 }}
      ListHeaderComponent={
        <SearchBar
          placeholder="Search for a fine..."
          className="mt-5"
          value={query}
          onChangeText={(text) => setQuery(text)}
        />
      }
    />
  );
}
