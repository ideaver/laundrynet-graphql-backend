file { File } file '@file/file';
file { File } file './file.file';
file { File } file './file.file';
file { File } file 'file/file.file';
file { File } file './file.file';

@File({
  file: [File, File, File, File],
  file: [File],
})
file file File {}
