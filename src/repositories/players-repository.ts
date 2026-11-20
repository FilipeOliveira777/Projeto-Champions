import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const dataBase: PlayerModel[] = [
  {
    "id": 1,
    "name": "Lionel Messi",
    "club": "Inter Miami",
    "nationality": "Argentina",
    "position": "RW",
    "statistics": {
      "overall": 95,
      "pace": 85,
      "shooting": 94,
      "passing": 96,
      "dribbling": 97,
      "defending": 35,
      "physical": 65
    }
  },
  {
    "id": 2,
    "name": "Cristiano Ronaldo",
    "club": "Al-Nassr",
    "nationality": "Portugal",
    "position": "ST",
    "statistics": {
      "overall": 91,
      "pace": 84,
      "shooting": 95,
      "passing": 82,
      "dribbling": 88,
      "defending": 35,
      "physical": 79
    }
  },
  {
    "id": 3,
    "name": "Ronaldinho Gaúcho",
    "club": "Legend",
    "nationality": "Brazil",
    "position": "CAM",
    "statistics": {
      "overall": 94,
      "pace": 91,
      "shooting": 88,
      "passing": 94,
      "dribbling": 98,
      "defending": 30,
      "physical": 76
    }
  },
  {
    "id": 4,
    "name": "David Beckham",
    "club": "Legend",
    "nationality": "England",
    "position": "RM",
    "statistics": {
      "overall": 91,
      "pace": 78,
      "shooting": 85,
      "passing": 96,
      "dribbling": 86,
      "defending": 62,
      "physical": 72
    }
  },
  {
    "id": 5,
    "name": "Pelé",
    "club": "Legend",
    "nationality": "Brazil",
    "position": "ST",
    "statistics": {
      "overall": 98,
      "pace": 95,
      "shooting": 98,
      "passing": 94,
      "dribbling": 97,
      "defending": 45,
      "physical": 88
    }
  },
  {
    "id": 6,
    "name": "Diego Maradona",
    "club": "Legend",
    "nationality": "Argentina",
    "position": "CAM",
    "statistics": {
      "overall": 97,
      "pace": 90,
      "shooting": 91,
      "passing": 96,
      "dribbling": 99,
      "defending": 38,
      "physical": 74
    }
  },
  {
    "id": 7,
    "name": "Ronaldo Nazário",
    "club": "Legend",
    "nationality": "Brazil",
    "position": "ST",
    "statistics": {
      "overall": 97,
      "pace": 97,
      "shooting": 96,
      "passing": 83,
      "dribbling": 96,
      "defending": 32,
      "physical": 87
    }
  },
  {
    "id": 8,
    "name": "Zinedine Zidane",
    "club": "Legend",
    "nationality": "France",
    "position": "CAM",
    "statistics": {
      "overall": 96,
      "pace": 82,
      "shooting": 88,
      "passing": 97,
      "dribbling": 95,
      "defending": 48,
      "physical": 86
    }
  },
  {
    "id": 9,
    "name": "Johan Cruyff",
    "club": "Legend",
    "nationality": "Netherlands",
    "position": "CF",
    "statistics": {
      "overall": 96,
      "pace": 93,
      "shooting": 92,
      "passing": 95,
      "dribbling": 96,
      "defending": 40,
      "physical": 78
    }
  },
  {
    "id": 10,
    "name": "Franz Beckenbauer",
    "club": "Legend",
    "nationality": "Germany",
    "position": "CB",
    "statistics": {
      "overall": 95,
      "pace": 82,
      "shooting": 72,
      "passing": 93,
      "dribbling": 84,
      "defending": 97,
      "physical": 87
    }
  },
  {
    "id": 11,
    "name": "Ronald Koeman",
    "club": "Legend",
    "nationality": "Netherlands",
    "position": "CB",
    "statistics": {
      "overall": 91,
      "pace": 68,
      "shooting": 88,
      "passing": 94,
      "dribbling": 78,
      "defending": 88,
      "physical": 82
    }
  },
  {
    "id": 12,
    "name": "Thierry Henry",
    "club": "Legend",
    "nationality": "France",
    "position": "ST",
    "statistics": {
      "overall": 95,
      "pace": 96,
      "shooting": 94,
      "passing": 88,
      "dribbling": 94,
      "defending": 35,
      "physical": 84
    }
  },
  {
    "id": 13,
    "name": "Kaká",
    "club": "Legend",
    "nationality": "Brazil",
    "position": "CAM",
    "statistics": {
      "overall": 93,
      "pace": 91,
      "shooting": 90,
      "passing": 91,
      "dribbling": 94,
      "defending": 32,
      "physical": 82
    }
  },
  {
    "id": 14,
    "name": "Andrés Iniesta",
    "club": "Legend",
    "nationality": "Spain",
    "position": "CM",
    "statistics": {
      "overall": 94,
      "pace": 78,
      "shooting": 82,
      "passing": 97,
      "dribbling": 96,
      "defending": 45,
      "physical": 62
    }
  },
  {
    "id": 15,
    "name": "Xavi",
    "club": "Legend",
    "nationality": "Spain",
    "position": "CM",
    "statistics": {
      "overall": 93,
      "pace": 65,
      "shooting": 75,
      "passing": 99,
      "dribbling": 90,
      "defending": 58,
      "physical": 65
    }
  },
  {
    "id": 16,
    "name": "Paolo Maldini",
    "club": "Legend",
    "nationality": "Italy",
    "position": "CB",
    "statistics": {
      "overall": 95,
      "pace": 87,
      "shooting": 55,
      "passing": 87,
      "dribbling": 82,
      "defending": 98,
      "physical": 86
    }
  },
  {
    "id": 17,
    "name": "Roberto Carlos",
    "club": "Legend",
    "nationality": "Brazil",
    "position": "LB",
    "statistics": {
      "overall": 94,
      "pace": 95,
      "shooting": 90,
      "passing": 87,
      "dribbling": 88,
      "defending": 89,
      "physical": 92
    }
  },
  {
    "id": 18,
    "name": "Cafu",
    "club": "Legend",
    "nationality": "Brazil",
    "position": "RB",
    "statistics": {
      "overall": 94,
      "pace": 94,
      "shooting": 65,
      "passing": 89,
      "dribbling": 91,
      "defending": 91,
      "physical": 90
    }
  },
  {
    "id": 19,
    "name": "Gianluigi Buffon",
    "club": "Legend",
    "nationality": "Italy",
    "position": "GK",
    "statistics": {
      "overall": 95,
      "pace": 55,
      "shooting": 10,
      "passing": 70,
      "dribbling": 30,
      "defending": 96,
      "physical": 91
    }
  },
  {
    "id": 20,
    "name": "Oliver Kahn",
    "club": "Legend",
    "nationality": "Germany",
    "position": "GK",
    "statistics": {
      "overall": 92,
      "pace": 50,
      "shooting": 8,
      "passing": 65,
      "dribbling": 25,
      "defending": 94,
      "physical": 93
    }
  },
  {
    "id": 21,
    "name": "Kylian Mbappé",
    "club": "Real Madrid",
    "nationality": "France",
    "position": "ST",
    "statistics": {
      "overall": 92,
      "pace": 97,
      "shooting": 91,
      "passing": 82,
      "dribbling": 94,
      "defending": 35,
      "physical": 78
    }
  },
  {
    "id": 22,
    "name": "Vinícius Júnior",
    "club": "Real Madrid",
    "nationality": "Brazil",
    "position": "LW",
    "statistics": {
      "overall": 91,
      "pace": 96,
      "shooting": 87,
      "passing": 82,
      "dribbling": 96,
      "defending": 32,
      "physical": 75
    }
  },
  {
    "id": 23,
    "name": "Jude Bellingham",
    "club": "Real Madrid",
    "nationality": "England",
    "position": "CM",
    "statistics": {
      "overall": 91,
      "pace": 82,
      "shooting": 88,
      "passing": 91,
      "dribbling": 90,
      "defending": 79,
      "physical": 87
    }
  },
  {
    "id": 24,
    "name": "Rodri",
    "club": "Manchester City",
    "nationality": "Spain",
    "position": "CDM",
    "statistics": {
      "overall": 91,
      "pace": 65,
      "shooting": 78,
      "passing": 93,
      "dribbling": 85,
      "defending": 89,
      "physical": 87
    }
  },
  {
    "id": 25,
    "name": "Erling Haaland",
    "club": "Manchester City",
    "nationality": "Norway",
    "position": "ST",
    "statistics": {
      "overall": 91,
      "pace": 89,
      "shooting": 96,
      "passing": 75,
      "dribbling": 81,
      "defending": 45,
      "physical": 94
    }
  },
  {
    "id": 26,
    "name": "Mohamed Salah",
    "club": "Liverpool",
    "nationality": "Egypt",
    "position": "RW",
    "statistics": {
      "overall": 90,
      "pace": 89,
      "shooting": 91,
      "passing": 86,
      "dribbling": 91,
      "defending": 45,
      "physical": 76
    }
  },
  {
    "id": 27,
    "name": "Kevin De Bruyne",
    "club": "Manchester City",
    "nationality": "Belgium",
    "position": "CAM",
    "statistics": {
      "overall": 90,
      "pace": 72,
      "shooting": 88,
      "passing": 96,
      "dribbling": 87,
      "defending": 55,
      "physical": 78
    }
  },
  {
    "id": 28,
    "name": "Lamine Yamal",
    "club": "Barcelona",
    "nationality": "Spain",
    "position": "RW",
    "statistics": {
      "overall": 89,
      "pace": 90,
      "shooting": 82,
      "passing": 88,
      "dribbling": 95,
      "defending": 30,
      "physical": 55
    }
  },
  {
    "id": 29,
    "name": "Raphinha",
    "club": "Barcelona",
    "nationality": "Brazil",
    "position": "LW",
    "statistics": {
      "overall": 89,
      "pace": 91,
      "shooting": 87,
      "passing": 86,
      "dribbling": 90,
      "defending": 38,
      "physical": 72
    }
  },
  {
    "id": 30,
    "name": "Harry Kane",
    "club": "Bayern Munich",
    "nationality": "England",
    "position": "ST",
    "statistics": {
      "overall": 90,
      "pace": 68,
      "shooting": 95,
      "passing": 90,
      "dribbling": 82,
      "defending": 45,
      "physical": 83
    }
  },
  {
    "id": 31,
    "name": "Robert Lewandowski",
    "club": "Barcelona",
    "nationality": "Poland",
    "position": "ST",
    "statistics": {
      "overall": 89,
      "pace": 75,
      "shooting": 94,
      "passing": 81,
      "dribbling": 84,
      "defending": 38,
      "physical": 84
    }
  },
  {
    "id": 32,
    "name": "Neymar Jr.",
    "club": "Santos",
    "nationality": "Brazil",
    "position": "LW",
    "statistics": {
      "overall": 88,
      "pace": 83,
      "shooting": 87,
      "passing": 91,
      "dribbling": 96,
      "defending": 30,
      "physical": 62
    }
  },
  {
    "id": 33,
    "name": "Pedri",
    "club": "Barcelona",
    "nationality": "Spain",
    "position": "CM",
    "statistics": {
      "overall": 88,
      "pace": 76,
      "shooting": 73,
      "passing": 94,
      "dribbling": 93,
      "defending": 54,
      "physical": 61
    }
  },
  {
    "id": 34,
    "name": "Federico Valverde",
    "club": "Real Madrid",
    "nationality": "Uruguay",
    "position": "CM",
    "statistics": {
      "overall": 89,
      "pace": 88,
      "shooting": 80,
      "passing": 87,
      "dribbling": 84,
      "defending": 82,
      "physical": 91
    }
  },
  {
    "id": 35,
    "name": "Virgil van Dijk",
    "club": "Liverpool",
    "nationality": "Netherlands",
    "position": "CB",
    "statistics": {
      "overall": 89,
      "pace": 79,
      "shooting": 60,
      "passing": 88,
      "dribbling": 70,
      "defending": 94,
      "physical": 93
    }
  },
  {
    "id": 36,
    "name": "Trent Alexander-Arnold",
    "club": "Real Madrid",
    "nationality": "England",
    "position": "RB",
    "statistics": {
      "overall": 86,
      "pace": 79,
      "shooting": 68,
      "passing": 95,
      "dribbling": 83,
      "defending": 70,
      "physical": 70
    }
  },
  {
    "id": 37,
    "name": "Alisson Becker",
    "club": "Liverpool",
    "nationality": "Brazil",
    "position": "GK",
    "statistics": {
      "overall": 89,
      "pace": 55,
      "shooting": 15,
      "passing": 90,
      "dribbling": 45,
      "defending": 93,
      "physical": 88
    }
  },
  {
    "id": 38,
    "name": "Thibaut Courtois",
    "club": "Real Madrid",
    "nationality": "Belgium",
    "position": "GK",
    "statistics": {
      "overall": 90,
      "pace": 50,
      "shooting": 10,
      "passing": 75,
      "dribbling": 35,
      "defending": 95,
      "physical": 91
    }
  },
  {
    "id": 39,
    "name": "Bernardo Silva",
    "club": "Manchester City",
    "nationality": "Portugal",
    "position": "CAM",
    "statistics": {
      "overall": 88,
      "pace": 78,
      "shooting": 76,
      "passing": 91,
      "dribbling": 95,
      "defending": 55,
      "physical": 65
    }
  },
  {
    "id": 40,
    "name": "Bukayo Saka",
    "club": "Arsenal",
    "nationality": "England",
    "position": "RW",
    "statistics": {
      "overall": 87,
      "pace": 86,
      "shooting": 82,
      "passing": 84,
      "dribbling": 90,
      "defending": 48,
      "physical": 73
    }
  },
  {
    "id": 41,
    "name": "Martin Ødegaard",
    "club": "Arsenal",
    "nationality": "Norway",
    "position": "CAM",
    "statistics": {
      "overall": 87,
      "pace": 75,
      "shooting": 77,
      "passing": 93,
      "dribbling": 91,
      "defending": 52,
      "physical": 63
    }
  },
  {
    "id": 42,
    "name": "Vincent Kompany",
    "club": "Legend",
    "nationality": "Belgium",
    "position": "CB",
    "statistics": {
      "overall": 91,
      "pace": 72,
      "shooting": 62,
      "passing": 82,
      "dribbling": 67,
      "defending": 95,
      "physical": 94
    }
  },
  {
    "id": 43,
    "name": "Steven Gerrard",
    "club": "Legend",
    "nationality": "England",
    "position": "CM",
    "statistics": {
      "overall": 93,
      "pace": 78,
      "shooting": 90,
      "passing": 94,
      "dribbling": 82,
      "defending": 76,
      "physical": 86
    }
  },
  {
    "id": 44,
    "name": "Frank Lampard",
    "club": "Legend",
    "nationality": "England",
    "position": "CM",
    "statistics": {
      "overall": 92,
      "pace": 72,
      "shooting": 92,
      "passing": 91,
      "dribbling": 80,
      "defending": 72,
      "physical": 80
    }
  },
  {
    "id": 45,
    "name": "Andrea Pirlo",
    "club": "Legend",
    "nationality": "Italy",
    "position": "CM",
    "statistics": {
      "overall": 93,
      "pace": 55,
      "shooting": 76,
      "passing": 99,
      "dribbling": 88,
      "defending": 62,
      "physical": 55
    }
  },
  {
    "id": 46,
    "name": "Sergio Ramos",
    "club": "Legend",
    "nationality": "Spain",
    "position": "CB",
    "statistics": {
      "overall": 93,
      "pace": 82,
      "shooting": 70,
      "passing": 82,
      "dribbling": 72,
      "defending": 94,
      "physical": 91
    }
  },
  {
    "id": 47,
    "name": "Thiago Silva",
    "club": "Fluminense",
    "nationality": "Brazil",
    "position": "CB",
    "statistics": {
      "overall": 86,
      "pace": 55,
      "shooting": 40,
      "passing": 86,
      "dribbling": 68,
      "defending": 91,
      "physical": 72
    }
  },
  {
    "id": 48,
    "name": "Luis Suárez",
    "club": "Inter Miami",
    "nationality": "Uruguay",
    "position": "ST",
    "statistics": {
      "overall": 88,
      "pace": 67,
      "shooting": 94,
      "passing": 85,
      "dribbling": 87,
      "defending": 38,
      "physical": 80
    }
  },
  {
    "id": 49,
    "name": "Zlatan Ibrahimović",
    "club": "Legend",
    "nationality": "Sweden",
    "position": "ST",
    "statistics": {
      "overall": 92,
      "pace": 72,
      "shooting": 95,
      "passing": 84,
      "dribbling": 87,
      "defending": 35,
      "physical": 95
    }
  },
  {
    "id": 50,
    "name": "Garrincha",
    "club": "Legend",
    "nationality": "Brazil",
    "position": "RW",
    "statistics": {
      "overall": 96,
      "pace": 96,
      "shooting": 89,
      "passing": 88,
      "dribbling": 99,
      "defending": 25,
      "physical": 72
    }
  }

];


export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return dataBase;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return dataBase.find((player) => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) =>{
  dataBase.push(player);
};

export const deletePlayer = async (id: number) => {
  const index = dataBase.findIndex(p => p.id === id);

  if(index !== -1){
    dataBase.splice(index, 1);
    return true;
  }

  return false;
};

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> =>{
  const playerIndex = dataBase.findIndex( player => player.id === id);

  if(playerIndex !== -1){
    dataBase[playerIndex].statistics = statistics;
  }

  return dataBase[playerIndex];
};