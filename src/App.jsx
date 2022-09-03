import './App.css'
import Header from './Header';
import Footer from './Footer';
import Employees from './Employees'
import { useState } from "react";

export default function App() {


  const [selectedTeam, setTeam] = useState("TeamB")
  const [employees, setEmployees] = useState([{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }]);

  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }
  function handleEmployeeCardClick(event) {
    //if i select team A and click on a card, the cards teamname will be chnaged to the selected team
    //if the selected employee is in the team selected,it will have a box shadow around it and sets the teamName to an empty string
    //otherwise the employee will be included in that team
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id) ? (employee.teamName === selectedTeam) ? { ...employee, teamName: '' } :
      { ...employee, teamName: selectedTeam } : employee);

    //chnaging the state and re render
    setEmployees(transformedEmployees);
  }

  return (
    <div>
      <Header selectedTeam={selectedTeam}
        teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
      />
      <Employees employees={employees}
        selectedTeam={selectedTeam}
        handleEmployeeCardClick={handleEmployeeCardClick}
        handleTeamSelectionChange={handleTeamSelectionChange}
      />
      <Footer />
    </div>

  );
}
