# Password Manager

## Kenapa project ini dibuat?

Project ini dibuat karena ingin menyelesaikan masalah kebanyakan orang, yaitu masalah dalam pengelelolaan password. Kebanyakan orang punya banyak sekali akun sosial media dan setiap akun itu punya password yang berbeda-beda, contohnya akun A punya password yang beda dengan akun B. Nah karena itu dibuatlah project ini, dimana tujuannya untuk menyimpan password password dari akun sosial media kita, agar kita tidak perlu mengingatnya lagi. Kita hanya perlu mengingat satu password saja, yaitu password dari aplikasi ini.


## Cara Instalasi / Menjalankan Project Ini


1. Install python.

   Karena Django itu sebuah web framework dari python, maka perlu install python dulu.

   https://www.python.org/

   atau bisa juga install dari microsoft store (windows) agar lebih mudah.

   kalau udah didownload dan diintall, bisa ketikkan command dibawah:

   `python --version`

   output (versi python):

   `Python 3.9.4` (versi bisa berbeda)

   kalau muncul versi pythonnya berarti berhasil diinstall.

   selanjutnya cek pip (package manager untuk python), otomatsi terinstall ketika python terinstall

   `pip --version`

   output (versi pip):

   `pip 21.1.2` (versi bisa berbeda)

2. Clone atau download project ini

   `git clone https://github.com/53buahapel/passman.git`

3. Buka terminal dan cd ke project yang udah didownload/clone

   `cd [path projectnya]`

4. Buat virtual environment untuk package yang nanti dibutuhkan (opsional)

   `python -m venv [nama environment]`

   ### contoh:

   `python -m venv env`

   akan menghasilkan folder baru yang namanya sesuai dengan environment yang kita buat.

5. Activate virtual environment nya (jika menggunakan virtual environment step 4)

   ### windows

   `[nama environment]\Scripts\activate`

   ### mac

   `source [nama environment]/bin/activate`

6. Install package dari file requirements.txt

   `pip install -r requirements.txt`

7. Lakukan migrasi ke database (migrate)

   tidak perlu konfigurasi database, karena secara default akan menggunakan database sqlite3, yang otomatis akan dibuat

   ### jalankan command:

   `python manage.py migrate`

   maka akan menjalankan semua migration ke dalam database.

   akan membuat file baru dengan nama `db.sqlite3`, yaitu file database sqlite3

8. Create super user untuk login sebagai admin (opsional)

   `python manage.py createsuperuser`

9. Jalankan project nya

   `python manage.py runserver`

   secara default akan menjalankan local development server di port `8000`.
   kalau mau menggunakan port lain bisa sebutkan port yang ingin digunakan.

   ### contoh:

   `python manage.py runserver 3000`
   akan menjalankan local development server diport `3000`

10. Buka web nya di browser
11. Login dengan username dan password pada saat melakukan create super user.

12. Jika ingin melihat halaman admin

    akses halaman admin

    `[server]/admin`

    ## contoh

    `localhost:8000/admin`

## Thank you 😁
