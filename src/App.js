import './App.css';
import Card from './card';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  var carddetails = [
    {
      pname: "Free",
      price: 0,
      features:[
        {
          name:"Single User",
          isEnabled: true
        },
        {
          name:"5GB Storage",
          isEnabled: true
        },
        {
          name:"Unlimited Public Projects",
          isEnabled: true
        },
        {
          name:"Community Access",
          isEnabled: true
        },
        {
          name:"Unlimited Private Projects",
          isEnabled: false
        },
        {
          name:"Dedicated Phone Support",
          isEnabled: false
        },
        {
          name:"Free Subdomain",
          isEnabled: false
        },
        {
          name:"Monthly Status Reports",
          isEnabled: false
        }
      ]
    },
    {
      pname: "Plus",
      price: 9,
      features:[
        {
          name:"5 Users",
          isBold: true,
          isEnabled:true
        },
        {
          name:"50GB Storage",
          isEnabled:true
        },
        {
          name:"Unlimited Public Projects",
          isEnabled: true
        },
        {
          name:"Community Access",
          isEnabled: true
        },
        {
          name:"Unlimited Private Projects",
          isEnabled: true
        },
        {
          name:"Dedicated Phone Support",
          isEnabled: true
        },
        {
          name:"Free Subdomain",
          isEnabled: true
        },
        {
          name:"Monthly Status Reports",
          isEnabled: false
        }
      ]
    },
    {
      pname: "Pro",
      price: 49,
      features:[
        {
          name:"Unlimited Users",
          isBold: true,
          isEnabled:true
        },
        {
          name:"150GB Storage",
          isEnabled:true
        },
        {
          name:"Unlimited Public Projects",
          isEnabled: true
        },
        {
          name:"Community Access",
          isEnabled: true
        },
        {
          name:"Unlimited Private Projects",
          isEnabled: true
        },
        {
          name:"Dedicated Phone Support",
          isEnabled: true
        },
        {
          name:"Free Subdomain",
          isEnabled: true
        },
        {
          name:"Monthly Status Reports",
          isEnabled: true
        }

      ]
    }
  ]
  return (
    <div classNameName="App">
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {
              carddetails.map((card) => {
                return <Card card={card}></Card>
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default App;
