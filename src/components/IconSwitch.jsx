export const IconSwitch = ({icon, onSwitch}) => {
        // view_list      view_module  
  return (
    <>
      <div style={{float: 'right'}}>
        <span className="material-icons" onClick={onSwitch}>{icon}</span>
      </div>
    </>
  )
}