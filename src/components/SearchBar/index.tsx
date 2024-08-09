import React, { useState, useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import HistoryIcon from '@mui/icons-material/History';
import { IconButton } from '@mui/material';
import styles from './styles.module.scss';
import useClickAway from '../../hooks/index';
import { List_History } from '../../data';

const SearchBar = () => {
    const listGundamFamous = ["Universal Century", "Cosmic Era", "After Colony", "Anno Domini"];
    const [listHistory, setListHistory] = useState<string[]>(List_History);
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleDeleteItem = (item: string) => {
        console.log("delete",item)
        const arr = listHistory.filter(a => a !== item);
        setListHistory(arr);
    };

    const handleSeclectHistory = (item: string) => {
        console.log("history",item)
    };

    const handleSearch = (text: string) => {
        console.log("search",text)
    };

    useClickAway(dropdownRef, () => setIsDropdownVisible(false));

    return (
        <div className={styles.inputSearchCtn}>
            <div className={styles.inputSearchContent}>
                <input
                    placeholder='Nhập tên Gundam...'
                    onChange={handleChange}
                    onFocus={() => setIsDropdownVisible(true)}
                />
                <div style={{display:"flex", alignItems:'center'}} onClick={() => handleSearch(searchTerm)}>
                    <SearchIcon className={styles.inputSearchIcon} />
                </div>
            </div>
            {isDropdownVisible && (
                <div ref={dropdownRef} className={styles.dropDownSearch}>
                    <div style={{ margin: "20px" }}>
                        {searchTerm === "" ? (
                            <>
                                <div className={styles.dropDownSearchTitle}>Tra cứu hàng đầu</div>
                                <div style={{ display: 'flex' }}>
                                    {listGundamFamous.map(item => (
                                        <div key={item} className={styles.dropDownSearchItem}>{item}</div>
                                    ))}
                                </div>
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
                            <>
                                {listHistory.map(item => (
                                    <div key={item} className={styles.dropDownHistoryItem}>
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
    );
};

export default SearchBar;
