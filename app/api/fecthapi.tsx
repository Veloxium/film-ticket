import { useEffect, useState } from "react";

const useFetchAPI = (selectedIndex = 0): any[] => {
  const [selectedData, setSelectedData] = useState<any[]>([]);

  useEffect(() => {
    fetchAPI(selectedIndex);
  }, [selectedIndex]);

  const fetchAPI = async (index: number) => {
    const res = await fetch("http://localhost:5000/LEM-XXI-INCEPTION-VIEW/", {
      cache: "no-cache"
    });
    const data = await res.json();
    let filteredData: any[];

    switch (index) {
      case 0:
        filteredData = data.filter(
          (obj: { time: string }) => obj.time === "18:00"
        );
        break;
      case 1:
        filteredData = data.filter(
          (obj: { time: string }) => obj.time === "20:00"
        );
        break;
      case 2:
        filteredData = data.filter(
          (obj: { time: string }) => obj.time === "22:00"
        );
        break;
      default:
        filteredData = [];
        break;
    }

    setSelectedData(filteredData);
  };

  return selectedData;
};

export default useFetchAPI;
