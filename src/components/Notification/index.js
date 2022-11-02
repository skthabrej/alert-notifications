import './index.css'
import {GrFormClose} from 'react-icons/gr'


const Notification = props => {
    const {children} = props
    return (
        <div className='notifications-container'>
            <div className='children-container'>{children}</div>
            <div className='form-close'>
                <GrFormClose className='icon-from-close'/>
            </div>
        </div>
    )
}
export default Notification