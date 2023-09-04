import { useDispatch } from 'react-redux'
import { searchByName } from './search-slice'
import InputText from '../../components-ui/InputText';
import Button from '../../components-ui/Button';
export default function Search({}) {
    const dispatch = useDispatch();
    return (
        <form>
            <InputText />
            <Button>Search </Button>
        </form>
    )
}
