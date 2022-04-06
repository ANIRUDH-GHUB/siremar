
interface School {
  id: string;
  name: string;
  acf: {
    register: string | "id1, id2, id3";
  };
}

interface Events {
  id: string;
  title: string;
  acf: {
    description: string;
    date: string;
    time: string;
    location: string;
    register: string | "[{name:anirudh}]";
  };
}

interface Business {
    id: string;
    title: string;
    acf: {
        description: string;
        date: string;
        register: string | "[{name:anirudh}]";
    };
}

interface Flights{
    id: string;
    title: string;
    acf: {
        date: string
        time: string
        destination: string
        register: string | "[{name:anirudh}]";
}

