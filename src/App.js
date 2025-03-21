import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// 假设你有一个名为HelloWorld的组件，需要先导入
import HelloWorld from "./HelloWorld";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* 使用 Route 来定义路径与组件之间的映射 */}
          <Route path="/hello" element={<HelloWorld />} />
          {/* 这里用 / 相当都根路径重定向到 /helloWorld组件中 */}
          <Route path="/" element={<HelloWorld />} />
          {/* 可以继续添加更多的路由配置 */}
          {/* 默认路由可以使用 * 来匹配所有未定义的路径 */}
          <Route path="*" element={<div>404 - 页面未找到</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
