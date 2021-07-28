import React , { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPizzaById ,editPizza} from '../actions/pizzaActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success'


export default function Editpizza({match}) {

    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [smallprice, setSmallprice] = useState()
    const [mediumprice, setMediumprice] = useState()
    const [largeprice, setLargeprice] = useState()
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    
    const getpizzabyidstate = useSelector(state => state.getPizzaByIdReducer)
    const {loading , error ,pizza} = getpizzabyidstate;

    const editpizzastate = useSelector(state => state.editPizzaReducer)
    const {editloading , editerror ,editsuccess} = editpizzastate ;


    useEffect(() => {

        if(pizza){
            if(pizza._id === match.params.pizzaid ){
                setName(pizza.name)
                setSmallprice(pizza.prices[0]['small'])
                setMediumprice(pizza.prices[0]['medium'])
                setLargeprice(pizza.prices[0]['large'])
                setImage(pizza.image)
                setDescription(pizza.description)
                setCategory(pizza.category)
            }
            else{
                dispatch(getPizzaById(match.params.pizzaid))
            }   
        }
        else{
            dispatch(getPizzaById(match.params.pizzaid))
        }
        
    }, [pizza,dispatch])

    function formHandler(e){
        e.preventDefault();

        const editedpizza = {
            _id : match.params.pizzaid,
            name,
            image,
            description,
            category,
            prices : 
                {
                    small: smallprice,
                    medium : mediumprice,
                    large: largeprice
                }
            
        }
        dispatch(editPizza(editedpizza))

    }

    return (
        <div>
            
            <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
            <h1>Edit Pizza</h1>
                { loading && (<Loading/>)}
                { error && (<Error error="Something went wrong" />)}
                { editsuccess && (<Success success="Edit Pizza Successfully" />)}
                { editloading && (<Loading />)}

                <form onSubmit={formHandler}>
                    <input className="form-control" type="text" placeholder="Write Pizza name" value={name} onChange={(e) => { setName(e.target.value) }} />
                    <input className="form-control" type="number" placeholder="Small Varient Price" value={smallprice} onChange={(e) => { setSmallprice(e.target.value) }} />
                    <input className="form-control" type="number" placeholder="Medium Varient Price" value={mediumprice} onChange={(e) => { setMediumprice(e.target.value) }} />
                    <input className="form-control" type="number" placeholder="Large Varient Price" value={largeprice} onChange={(e) => { setLargeprice(e.target.value) }} />
                    <input className="form-control" type="text" placeholder="Put Image URL" value={image} onChange={(e) => { setImage(e.target.value) }} />
                    <input className="form-control" type="text" placeholder="Write description about pizza" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                    <input className="form-control" type="text" placeholder="Pizza Category" value={category} onChange={(e) => { setCategory(e.target.value) }} />
                    <button className="btn mt-3" type="submit">Edit Pizza</button>
                </form>
            </div>
        </div>
    )
}
