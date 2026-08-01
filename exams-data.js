const ALL_EXAMS = {
    "toan-01": {
        title: "Test: Khảo sát hàm số & Cực trị - Toán 12",
        duration: 90,
        pdfUrl: "ddmaxmindvd.pdf",
        
        // Cấu hình số lượng từng phần
        part1Total: 24, // Phần I: Trắc nghiệm 4 lựa chọn (A, B, C, D)
        part2Total: 4,  // Phần II: Trắc nghiệm đúng/sai (4 ý a, b, c, d mỗi câu)
        part3Total: 0,  // Phần III: Trả lời ngắn (Điền đáp án)
        
        // Đáp án chuẩn để chấm điểm tự động
        answers: {
            part1: { 1: 0, 2: 1, 3: 3, 4: 2, 5:3, 6:1,7:2, 8:1,9:1,10:2,11:3,12:2,13:0,14:0,15:2,16:2,17:3,18:1,19:0,20:0,21:2,22:2,23:1,24:1 }, // 0=A, 1=B, 2=C, 3=D
            part2: { 
                25: {a: false, b: true, c: false, d: false},
                 26: {a: true, b: false, c: false, d: true},
                  27: {a: true, b: false, c: true, d: false},
                   28: {a: true, b: false, c: false, d: true},
            },
        }
    }
};