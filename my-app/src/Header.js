import {useHistory} from 'react-router-dom'

const Header = (props) => {
    const history = useHistory();
    return (
        <div>
            <p>
                {props.course}
            </p>
            <button onClick={() => history.push('/Content')}>Go to Content</button>

        </div>
    )
}
export default Header;