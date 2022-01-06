import ExportCollection from "../io/export";
import SaveCollection from '../io/save';
import LoadCollection from '../io/load';

const Navbar = () => {
    return (
        <div>
            <nav>
                <div class="nav-wrapper navbar">
                    <a href="#!" class="brand-logo">Lists</a>
                    <ul class="right">
                        <li><ExportCollection /></li>
                        <li><SaveCollection /></li>
                        <li><LoadCollection /></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar