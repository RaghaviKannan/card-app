import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{props.card.pname}</h5>
          <h6 className="card-price text-center">${props.card.price}<span className="period">/month</span></h6>
          <hr/>
          <ul class="fa-ul">
              {
                props.card.features.map((item)=>{
                  return <li className={item.isEnabled?"":"text-muted"}><FontAwesomeIcon icon={item.isEnabled?faCheck:faXmark}></FontAwesomeIcon>{` ${item.name}`}</li>
                })
              }
              <li className={props.card.features.monthlystatusval?"":"text-muted"}><span class="fa-li"><i class={props.card.features.monthlystatusval?"fas fa-check":"fas fa-times"}></i></span>{props.card.features.monthlystatus}</li>
            </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;