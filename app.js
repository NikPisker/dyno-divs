const queryString = {
"Space":[{"Order":1,"Header":"Group1","Tiles":[{"Order":1,"Name":"Box1","Width":200,"Height":100},{"Order":2,"Name":"Box2","Width":100,"Height":200},{"Order":3,"Name":"Box3","Width":100,"Height":100},{"Order":4,"Name":"Box4","Width":100,"Height":300}]},{"Order":2,"Header":"Group2","Tiles":[{"Order":1,"Name":"Til1","Width":100,"Height":100},{"Order":2,"Name":"Til 2","Width":100,"Height":200},{"Order":3,"Name":"Til3","Width":100,"Height":200},
{"Order":4,"Name":"Til4","Width":100,"Height":100},{"Order":5,"Name":"Til5","Width":100,"Height":300}]}] };

const params = Object.fromEntries(new URLSearchParams(location.search));
const divsData = JSON.parse(Object.entries(params)[0][0]);
const contentWrapper = document.querySelector('.content-wrapper');

const renderDivs = function () {
    for (let key in divsData) {
        const spaceDiv = document.createElement('div');
        const groupWrapperDiv = document.createElement('div');
        groupWrapperDiv.className = 'group-wrapper';
        const spaceTitle = document.createElement('span');
        spaceDiv.className = 'space';
        spaceTitle.className = 'space-title';
        const records = divsData[key];
        spaceTitle.append(key);
        spaceDiv.appendChild(spaceTitle);
        spaceDiv.appendChild(groupWrapperDiv);
        for (let index in records) {
            const groupDiv = document.createElement('div');
            groupDiv.className = 'group';
            groupDiv.style.width = 100 / records.length + '%';
            const groupTitle = document.createElement('span');
            groupTitle.className = 'group-title';
            groupTitle.append(records[index].Header);
            groupDiv.append(groupTitle);
            const groupContentDiv = document.createElement('div');
            groupContentDiv.className = 'group-content';
            groupDiv.append(groupContentDiv);
            groupWrapperDiv.appendChild(groupDiv);
            const countTiles = records[index].Tiles.length;
            const tiles = records[index].Tiles;
            for (let i = 0; i < countTiles; i++) {
                const groupItem = document.createElement('div');
                const groupTitle = document.createElement('span');
                const groupSize = document.createElement('span');
                groupSize.append(tiles[i].Width + ' x ' + tiles[i].Height);
                groupTitle.append(tiles[i].Name);
                groupTitle.className = 'box-name';
                groupItem.className = 'group-item';
                groupSize.className = 'box-size';
                groupItem.style.gridRow =`span ${(tiles[i].Height / 100)}`;
                groupItem.style.gridColumn = `span ${(tiles[i].Width / 100)}`;
                groupItem.appendChild(groupTitle);
                groupItem.appendChild(groupSize);
                groupContentDiv.appendChild(groupItem);
            }
        }
        contentWrapper.appendChild(spaceDiv);
    }
};

renderDivs();
