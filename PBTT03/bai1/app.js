const btnAdd =
    document.getElementById("btnAdd");

const btnClose =
    document.getElementById("btnClose");

const studentModal =
    document.getElementById("studentModal");

const studentForm =
    document.getElementById("studentForm");

const studentList =
    document.getElementById("studentList");

const totalStudents =
    document.getElementById("totalStudents");

const avgScore =
    document.getElementById("avgScore");

const message =
    document.getElementById("message");


// =========================
// DATA
// =========================

let students = [];

let editIndex = null;


// =========================
// MỞ MODAL
// =========================

btnAdd.addEventListener(
    "click",
    function () {

        studentModal.classList.remove(
            "hidden"
        );

    }
);


// =========================
// ĐÓNG MODAL
// =========================

btnClose.addEventListener(
    "click",
    function () {

        studentModal.classList.add(
            "hidden"
        );

        studentForm.reset();

        editIndex = null;

    }
);


// =========================
// RENDER STUDENTS
// =========================

function renderStudents() {

    studentList.innerHTML = "";

    // Nếu không có dữ liệu
    if(students.length === 0) {

        studentList.innerHTML = `
            <tr>
                <td colspan="7">
                    Chưa có sinh viên
                </td>
            </tr>
        `;

        return;
    }

    students.forEach(function(student, index) {

        studentList.innerHTML += `
            <tr>

                <td>${student.id}</td>

                <td>${student.name}</td>

                <td>${student.birthday}</td>

                <td>${student.className}</td>

                <td>${student.score}</td>

                <td>${student.email}</td>

                <td>

                    <button
                        class="edit-btn"
                        data-index="${index}">

                        Sửa

                    </button>

                    <button
                        class="delete-btn"
                        data-index="${index}">

                        Xóa

                    </button>

                </td>

            </tr>
        `;
    });

}


// =========================
// SUBMIT FORM
// =========================

studentForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const student = {

            id:
            document.getElementById(
                "studentId"
            ).value,

            name:
            document.getElementById(
                "fullName"
            ).value,

            birthday:
            document.getElementById(
                "birthday"
            ).value,

            className:
            document.getElementById(
                "className"
            ).value,

            score:
            document.getElementById(
                "score"
            ).value,

            email:
            document.getElementById(
                "email"
            ).value
        };

        // THÊM
        if(editIndex === null) {

            students.push(student);

            showMessage(
                "Thêm sinh viên thành công"
            );

        }

        // SỬA
        else {

            students[editIndex] = student;

            showMessage(
                "Cập nhật sinh viên thành công"
            );

            editIndex = null;
        }

        renderStudents();

        updateStatistics();

        saveStudents();

        studentForm.reset();

        studentModal.classList.add(
            "hidden"
        );

    }
);


// =========================
// EVENT CLICK TABLE
// =========================

studentList.addEventListener(
    "click",
    function(event) {

        // =====================
        // XÓA
        // =====================

        if(
            event.target.classList.contains(
                "delete-btn"
            )
        ) {

            const index =
                event.target.dataset.index;

            const confirmDelete =
                confirm(
                    "Bạn có chắc muốn xóa?"
                );

            if(confirmDelete) {

                students.splice(index, 1);

                renderStudents();

                updateStatistics();

                saveStudents();

                showMessage(
                    "Xóa sinh viên thành công"
                );

            }

        }


        // =====================
        // SỬA
        // =====================

        if(
            event.target.classList.contains(
                "edit-btn"
            )
        ) {

            editIndex =
                event.target.dataset.index;

            const student =
                students[editIndex];

            document.getElementById(
                "studentId"
            ).value = student.id;

            document.getElementById(
                "fullName"
            ).value = student.name;

            document.getElementById(
                "birthday"
            ).value = student.birthday;

            document.getElementById(
                "className"
            ).value = student.className;

            document.getElementById(
                "score"
            ).value = student.score;

            document.getElementById(
                "email"
            ).value = student.email;

            studentModal.classList.remove(
                "hidden"
            );

        }

    }
);


// =========================
// THỐNG KÊ
// =========================

function updateStatistics() {

    totalStudents.innerText =
        students.length;

    let total = 0;

    students.forEach(function(student) {

        total += Number(student.score);

    });

    let average = 0;

    if(students.length > 0) {

        average = total / students.length;

    }

    avgScore.innerText =
        average.toFixed(2);

}


// =========================
// LƯU LOCALSTORAGE
// =========================

function saveStudents() {

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

}


// =========================
// LOAD LOCALSTORAGE
// =========================

function loadStudents() {

    const data =
        localStorage.getItem("students");

    if(data) {

        students = JSON.parse(data);

    }

    renderStudents();

    updateStatistics();

}


// =========================
// THÔNG BÁO
// =========================

function showMessage(text) {

    message.innerText = text;

    setTimeout(function() {

        message.innerText = "";

    }, 3000);

}


// =========================
// CHẠY KHI MỞ TRANG
// =========================

loadStudents();