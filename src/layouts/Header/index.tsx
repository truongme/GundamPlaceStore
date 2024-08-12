import React, { useState, useRef } from 'react';
import Container from '@mui/material/Container';
import styles from './styles.module.scss'
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { List_Category } from '../../data';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import HistoryIcon from '@mui/icons-material/History';
import useClickAway from '../../hooks/index';
import { List_Gundam, List_History, listGundamFamous } from '../../data';
import ImgLogo from '../../assets/images/logo.jpg';
import { Badge, Tooltip } from '@mui/material';

const Header = () => {

    const [listHistory, setListHistory] = useState<string[]>([]);
    const [listFilter, setListFilter] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const arr = List_Category

    const lengthCart = 5;

    const navigate = useNavigate()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value.trim().toLowerCase();

        const filteredNames = List_Gundam
            .filter(gundam => gundam.name.toLowerCase().includes(text))
            .map(gundam => gundam.name);

        setListFilter(filteredNames.length > 0 ? filteredNames : [event.target.value]);
        setSearchTerm(event.target.value);
    };

    const handleDeleteItem = (text: string) => {
        console.log("delete", text)
        const arr = listHistory.filter(a => a !== text);
        setListHistory(arr);
    };

    const handleSelectFamous = (text: string) => {
        if (!listHistory.includes(text)) {
            setListHistory(prev => [text, ...prev]);
        }
        setIsDropdownVisible(false)
    }

    const handleSeclectHistory = (text: string) => {
        console.log("history", text)
        setIsDropdownVisible(false)
    };

    const handleSelectValue = (text: string) => {
        if (!listHistory.includes(text)) {
            setListHistory(prev => [text, ...prev]);
        }
        setIsDropdownVisible(false)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch(searchTerm);
        }
    };

    const handleSearch = (text: string) => {
        const result = List_Gundam.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
        if (text.trim() !== "" && !listHistory.includes(text)) {
            setListHistory(prevHistory => [text, ...prevHistory]);
        }
        setIsDropdownVisible(false)
        console.log("result", result)
    };

    useClickAway(dropdownRef, () => setIsDropdownVisible(false));

    return (
        <div className={styles.headerCtn}>
            <Container maxWidth="xl" className={styles.headerContent}>
                <div className={styles.headerSection}>
                    <Link to={"/"}>
                        <div className={styles.ImgLogoCtn}>
                            <img className='imgLogo' src={ImgLogo} />
                        </div>
                    </Link>
                </div>
                <div className={styles.inputSearchCtn}>
                    <div className={styles.inputSearchContent}>
                        <input
                            placeholder='Nhập tên Gundam...'
                            onChange={handleChange}
                            onFocus={() => setIsDropdownVisible(true)}
                            onClick={() => console.log(isDropdownVisible)}
                            onKeyDown={handleKeyDown}
                        />
                        <div style={{ display: "flex", alignItems: 'center' }} onClick={() => handleSearch(searchTerm)}>
                            <SearchIcon className={styles.inputSearchIcon} />
                        </div>
                    </div>
                    {isDropdownVisible && (
                        <div ref={dropdownRef} className={styles.dropDownSearch}>
                            <div style={{ margin: "20px" }}>
                                {searchTerm === "" ? (
                                    <>
                                        <div className={styles.dropDownSearchTitle}>Tra cứu hàng đầu</div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                            {listGundamFamous.map(item => (
                                                <div key={item} className={styles.dropDownSearchItem} onClick={() => handleSelectFamous(item)}>{item}</div>
                                            ))}
                                        </div>
                                        {listHistory.length > 0 ? (
                                            <>
                                                <div className={styles.dropDownSearchTitle}>Lịch sử tìm kiếm</div>
                                                <div>
                                                    {listHistory.map(item => (
                                                        <div key={item} className={styles.dropDownHistoryItem} onClick={() => handleSeclectHistory(item)}>
                                                            <div className={styles.dropDownHistoryContent}>
                                                                <HistoryIcon style={{ marginRight: "5px", color: "red" }} />
                                                                <span>{item}</span>
                                                            </div>
                                                            <IconButton
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    handleDeleteItem(item)
                                                                }}>
                                                                <ClearIcon />
                                                            </IconButton>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        ) : (
                                            <div style={{ color: '#555555', margin: '5px' }}>Không có tìm kiếm nào gần đây</div>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        {listFilter.map(item => (
                                            <div key={item} className={styles.dropDownHistoryItem} onClick={() => handleSelectValue(item)}>
                                                <div className={styles.dropDownHistoryContent}>
                                                    <SearchIcon style={{ marginRight: "5px", color: "red" }} />
                                                    <span>{item}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <div className={styles.headerSection}>
                    <Tooltip title="Giỏ hàng" arrow >
                        <IconButton aria-label="cart" className={styles.iconButton} onClick={() => navigate(`/cart`)}>
                            <Badge badgeContent={lengthCart} color="primary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Tài khoản" arrow>
                        <IconButton aria-label="user" className={styles.iconButton} onClick={() => navigate(`/user/5`)}>
                            <PersonIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            </Container>
            <div className={styles.categotyCtn}>
                <Container maxWidth="xl">
                    <div className={styles.categotyContent}>
                        {arr.map((item) => (
                            <div className={styles.categoryItemCtn} key={item.id}>
                                <div className={styles.categoryItem}>
                                    {item.name}
                                </div>
                                {/* <div className={styles.categoryHover}>
                                    truong
                                </div> */}
                            </div>
                        ))}
                    </div>
                </Container>

            </div>
        </div>
    )
}

export default Header