
import femaleProfile from './images/femaleProfile.jpeg';
import maleProfile from './images/maleProfile.jpg';

const Employees = ({ employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange }) => {

  return (
    <main className="container">
      <div class="row justify-content-center mt-3 mb-3">
        <div class="col-6">
          <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange} onClick={handleEmployeeCardClick}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>

      <div class="row justify-content-center mt-3 mb-3">
        <div class="col-8">
          <div class="card-collection">
            {
              employees.map((employee) => (
                //The cursor property chnages the mouse icon to a pointer
                //m-2 attribute adds space between each card grid
                //The standout shows the effect of the blackbox if an item belongs to selected class
                <div id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{ cursor: "pointer" }}>

                  {(employee.gender === 'male') ? <img src={maleProfile} className="card-img-top" /> :
                    <img src={femaleProfile} className="card-img-top" />}
                  <div className="card-body">
                    <h5 className="card-title">Full Name:{employee.fullName}</h5>
                    <p className="card-text"><b>Designation:</b>{employee.designation}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  )
}
export default Employees
