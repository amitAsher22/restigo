
//// redux
import { connect } from 'react-redux'

/// material ui
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


/// css from style_Css file
import '../style_Css/summary.css'




function OrderSummary(props) {



  return (

    <div>
    {props.draftItems.length > 0 && (
      <div sx={{ boxShadow: 2 }}>
        <Card sx={{ width: '500px', margin: 'auto', bgcolor: '#e8eaf6' }} >
          <CardContent>
            <h2 className='titleOrder'>סיכום הזמנה</h2>
            <div className='SummaryDiv' dir="ltr">
              {props.draftItems.map((item , index) =>(
                <div key={index} className='summary2'>
                <span >{item.price * item.amount}</span>
                <span >{item.name}</span>
                </div>
              ))}
                

              
            </div>
            <div className='SummaryDiv' dir="ltr">
              <div className='summary2'>
                <span>70</span>
                <span>זית טבעות ירוק ב השיטה עדח</span>

              </div>
            </div>
            <div className='SummaryDiv' dir="ltr">
              <div className='summary2'>
                <span>115</span>
                <span>גביעון לרוטב +מכסה 2 אוז</span>

              </div>
            </div>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button sx={{ bgcolor: '#2e7d32', color: 'white', padding: '.10em', width: '50%' }}>לתשלום</Button>
          </CardActions>
        </Card>
      </div>
    )}
      



    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    draftItems: state.draftOrders
  }
}

export default connect(mapStateToProps, null)(OrderSummary);