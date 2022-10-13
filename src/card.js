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
              <li className={props.card.features.userval?"":"text-muted"}><span class="fa-li"><FontAwesomeIcon icon={props.card.features.userval?{faCheck}:{faXmark}}/></span>{props.card.features.user}</li>
              <li className={props.card.features.storageval?"":"text-muted"}><span class="fa-li"><i class={props.card.features.storageval?"fas fa-check":"fas fa-times"}></i></span>{props.card.features.storage}</li>
              <li className={props.card.features.projectval?"":"text-muted"}><span class="fa-li"><i class={props.card.features.projectval?"fas fa-check":"fas fa-times"}></i></span>{props.card.features.project}</li>
              <li className={props.card.features.accessval?"":"text-muted"}><span class="fa-li"><i class={props.card.features.accessval?"fas fa-check":"fas fa-times"}></i></span>{props.card.features.access}</li>
              <li className={props.card.features.privateprojectsval?"":"text-muted"}><span class="fa-li"><i class={props.card.features.privateprojectsval?"fas fa-check":"fas fa-times"}></i></span>{props.card.features.privateprojects}</li>
              <li className={props.card.features.phonesupval?"":"text-muted"}><span class="fa-li"><i class={props.card.features.phonesupval?"fas fa-check":"fas fa-times"}></i></span>{props.card.features.phonesup}</li>
              <li className={props.card.features.subdomainval?"":"text-muted"}><span class="fa-li"><i class={props.card.features.subdomainval?"fas fa-check":"fas fa-times"}></i></span>{props.card.features.subdomain}</li>
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