import React, { useState } from 'react';

const Calculator = () => {
  const [params, setParams] = useState({
    area: '',
    floors: '',
    foundation: '',
    walls: '',
    roof: '',
    options: []
  });

  const [cost, setCost] = useState(0);

  const handleInputChange = (event) => {
    setParams({ ...params, [event.target.name]: event.target.value });
  };

  const handleOptionChange = (event) => {
    const options = [...params.options];
    if (event.target.checked) {
      options.push(event.target.value);
    } else {
      options.splice(options.indexOf(event.target.value), 1);
    }
    setParams({ ...params, options });
  };

  const calculateCost = () => {
    // Расчет стоимости строительства
    const cost = 100000; // Примерная стоимость
    setCost(cost);
  };

  return (
    <div>
      <h2>Калькулятор стоимости строительства</h2>
      <form>
        <label>
          Площадь (кв. м.):
          <input type="number" name="area" value={params.area} onChange={handleInputChange} />
        </label>
        <label>
          Количество этажей:
          <input type="number" name="floors" value={params.floors} onChange={handleInputChange} />
        </label>
        <label>
          Тип фундамента:
          <select name="foundation" value={params.foundation} onChange={handleInputChange}>
            <option value="">Выберите тип фундамента</option>
            <option value="ленточный">Ленточный</option>
            <option value="плитный">Плитный</option>
            <option value="столбчатый">Столбчатый</option>
          </select>
        </label>
        <label>
          Материал стен:
          <select name="walls" value={params.walls} onChange={handleInputChange}>
            <option value="">Выберите материал стен</option>
            <option value="кирпич">Кирпич</option>
            <option value="дерево">Дерево</option>
            <option value="газобетон">Газобетон</option>
          </select>
        </label>
        <label>
          Тип крыши:
          <select name="roof" value={params.roof} onChange={handleInputChange}>
            <option value="">Выберите тип крыши</option>
            <option value="плоская">Плоская</option>
            <option value="скатная">Скатная</option>
          </select>
        </label>
        <label>
          Дополнительные опции:
          <ul>
            <li>
              <input type="checkbox" name="options" value="балкон" checked={params.options.includes('балкон')} onChange={handleOptionChange} />
              Балкон
            </li>
            <li>
              <input type="checkbox" name="options" value="терраса" checked={params.options.includes('терраса')} onChange={handleOptionChange} />
              Терраса
            </li>
            <li>
              <input type="checkbox" name="options" value="гараж" checked={params.options.includes('гараж')} onChange={handleOptionChange} />
              Гараж
            </li>
          </ul>
        </label>
        <button type="button" onClick={calculateCost}>Рассчитать стоимость</button>
        <p>Итоговая стоимость строительства: {cost} руб.</p>
      </form>
    </div>
  );
};

export default Calculator;