function App(){
    // console.log('샘플');
    const memberList = [
    {
        id: "hong123",
        name: "홍길동",
        email: "hong123@example.com",
        joinDate: "2024-06-15",
        age: 10
    },
    {
        id: "kimc456",
        name: "김철수",
        email: "kimc456@example.com",
        joinDate: "2024-07-20",
        age: 15
    },
    {
        id: "park789",
        name: "박영희",
        email: "park789@example.com",
        joinDate: "2024-08-05",
        age: 20
    },
    {
        id: "lee101",
        name: "이민수",
        email: "lee101@example.com",
        joinDate: "2024-09-12",
        age: 25
    }
];

    const mrList = memberList.map((member) =>(
        <tr key={member.id}>
            <td>{member.id}</td>
            <td>{member.name}</td>
            <td>{member.email}</td>
            <td>{member.joinDate}</td>
            <td>{member.age}</td>
        </tr>
    ));

    
    return(
        <table border="1">
            <thead>
                <tr>
                        <td>아이디</td>
                        <td>이름</td>
                        <td>이메일</td>
                        <td>참가일</td>
                        <td>나이</td>
                </tr>
            </thead>
            <tbody>
                {mrList}
            </tbody>
        </table>
    );
}

export default App ;