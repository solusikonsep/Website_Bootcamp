Tentu! Berikut adalah contoh sederhana untuk operasi **CRUD** (Create, Read, Update, Delete) di MongoDB menggunakan query dasar. Anggap kita memiliki koleksi bernama `users` yang menyimpan data pengguna dengan field `name`, `age`, dan `email`.

### 1. **Create** (Membuat Data Baru)

Untuk menambahkan data ke dalam koleksi `users`, Anda bisa menggunakan metode `insertOne()` atau `insertMany()`.

#### **Insert Data Satu per Satu** (`insertOne`)

```javascript
db.users.insertOne({
  name: "John Doe",
  age: 25,
  email: "john.doe@example.com"
})
```

#### **Insert Banyak Data** (`insertMany`)

```javascript
db.users.insertMany([
  { name: "Jane Smith", age: 30, email: "jane.smith@example.com" },
  { name: "Mark Johnson", age: 28, email: "mark.johnson@example.com" }
])
```

### 2. **Read** (Membaca atau Mengambil Data)

Untuk mengambil data dari koleksi `users`, Anda bisa menggunakan metode `find()`.

#### **Ambil Semua Data** (Semua Dokumen)

```javascript
db.users.find()
```

#### **Ambil Data Berdasarkan Kondisi** (Mencari Berdasarkan Nama)

```javascript
db.users.find({ name: "John Doe" })
```

#### **Ambil Data Satu Dokumen** (`findOne`)

Jika Anda ingin mengambil satu dokumen yang pertama kali ditemukan berdasarkan kondisi tertentu:

```javascript
db.users.findOne({ name: "Jane Smith" })
```

#### **Ambil Data dengan Pembatasan** (Limit)

Misalnya, Anda hanya ingin mengambil 2 data pertama:

```javascript
db.users.find().limit(2)
```

#### **Ambil Data dengan Sortir** (Sort)

Untuk mengurutkan hasil berdasarkan usia (`age`), misalnya dari yang paling muda:

```javascript
db.users.find().sort({ age: 1 }) // 1 untuk urutan naik (ascending), -1 untuk urutan turun (descending)
```

### 3. **Update** (Memperbarui Data)

Untuk memperbarui data di MongoDB, gunakan metode `updateOne()`, `updateMany()`, atau `replaceOne()`.

#### **Update Satu Dokumen** (`updateOne`)

Misalnya, Anda ingin memperbarui usia pengguna dengan nama "John Doe":

```javascript
db.users.updateOne(
  { name: "John Doe" },  // Kondisi pencarian
  { $set: { age: 26 } }  // Update field 'age' menjadi 26
)
```

#### **Update Banyak Dokumen** (`updateMany`)

Jika Anda ingin memperbarui lebih dari satu dokumen, misalnya, mengubah email semua pengguna yang berusia lebih dari 30 tahun:

```javascript
db.users.updateMany(
  { age: { $gt: 30 } },  // Kondisi: usia lebih dari 30
  { $set: { email: "updated@example.com" } }  // Update field 'email'
)
```

#### **Replace Data** (`replaceOne`)

Jika Anda ingin mengganti seluruh dokumen (bukan hanya beberapa field) dengan dokumen baru:

```javascript
db.users.replaceOne(
  { name: "Mark Johnson" },  // Kondisi pencarian
  { name: "Mark Johnson", age: 29, email: "new.email@example.com" }  // Data baru
)
```

### 4. **Delete** (Menghapus Data)

Untuk menghapus data, Anda bisa menggunakan `deleteOne()` atau `deleteMany()`.

#### **Hapus Satu Dokumen** (`deleteOne`)

Misalnya, Anda ingin menghapus pengguna dengan nama "John Doe":

```javascript
db.users.deleteOne({ name: "John Doe" })
```

#### **Hapus Banyak Dokumen** (`deleteMany`)

Jika Anda ingin menghapus semua pengguna yang berusia lebih dari 30 tahun:

```javascript
db.users.deleteMany({ age: { $gt: 30 } })
```

### Ringkasan Contoh CRUD MongoDB:
- **Create**: `insertOne()` / `insertMany()`
- **Read**: `find()` / `findOne()` / `sort()` / `limit()`
- **Update**: `updateOne()` / `updateMany()` / `replaceOne()`
- **Delete**: `deleteOne()` / `deleteMany()`

Ini adalah contoh dasar untuk melakukan operasi CRUD di MongoDB. Anda bisa memodifikasi query sesuai dengan kebutuhan aplikasi Anda.