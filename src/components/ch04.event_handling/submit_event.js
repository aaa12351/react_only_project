function App(){
    const ChangeTest = (event) => {
         const where = event.target.value ;
         console.log(`이동할 페이지 : ${where}`);

         if(where === '-'){
            alert('이동할 페이지를 선택해 주세요.') ;
         }else{
            document.getElementById('myform').action = where ; // 이동할 페이지 정보 변경
            document.getElementById('myform').submit() ; // 해당 페이지로 양식을 제출

         }
       
    }

    const SubmitTest = (event) => {
        console.log(`이벤트 유형 : ${event.type}`);

        const isChecked = document.getElementById('go').checked ;                    // 체크 유무를 나타내는 코드
                                                                                    // be동사가 붙어 있으면 100% 참 또는 거짓(ex.checked)
        if(isChecked === true){
            alert(`액션 페이지로 이동합니다.`);
        }else{
            alert(`액션 페이지로 이동하지 않습니다.`);
            event.preventDefault(); // 이벤트 전파 방지
        }
    }    
                                                            

    return(
        <div className="App">         
            <h2>Submit Test</h2>
            <form id="myform" onSubmit={SubmitTest} action={`http://www.naver.com`}>
                <select onChange={ChangeTest}>  
                    <option value="-">-- 이동할 곳을 선택해 주세요.</option>
                    <option value="http://www.naver.com">네이버</option>
                    <option value="http://www.daum.net">다음</option>
                    <option value="http://www.google.com">구글</option>
                </select>
                <br /><br />
                
                <input type="checkbox" id="go" />체크 상태일때만 해당 페이지로 이동            
                <br /><br />

                                                                    
                <input type="submit" value="전송" />     
            </form>                                                                 
        </div>        // input의 타입이 submit이 제출한다는 뜻인데 폼 양식인 네이버 링크에 적용됩니다.                                                       
    );                // 컨트롤 + 스페이스 = 타입들이 뜹니다.
}                     // 실행하려면 select에 온체인지 다지움

export default App ;