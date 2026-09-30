const mockExtraQuestions = [
  {
    id: 21,
    topic: 'Production mindset / readiness',
    chapter: 'บทที่ 1',
    prompt: 'แอป CRUD ทำงานได้เมื่อเน็ตดี แต่ค้างเมื่อเน็ตหลุดและไม่มีเทสคุ้มกัน ข้อใดสะท้อนความหมายของแอปที่ “ส่งมอบได้” ตามเอกสาร?',
    options: [
      'เพิ่มหน้า CRUD ให้มากขึ้นก่อน ส่วน error ค่อยแก้หลังส่ง',
      'ทำให้ UI สวยที่สุด โดยไม่จำเป็นต้องวัดหรือทดสอบ',
      'ให้ API สำเร็จใน demo หนึ่งครั้งก็เพียงพอ',
      'รับมือความล้มเหลว วัดประสิทธิภาพ ทดสอบ และมีกระบวนการปล่อยแอปที่ทำซ้ำได้',
    ],
    answer: 3,
    explanation: 'ความพร้อมส่งมอบรวมการรับมือเน็ตหลุด การทำงานกับข้อมูลจำนวนมาก การแก้โค้ดอย่างมั่นใจ และการขึ้นสโตร์จริง การเพิ่ม CRUD, ทำ UI สวย หรือ demo สำเร็จอย่างเดียวจึงยังไม่ครอบคลุมความพร้อมเหล่านี้',
    source: 'PDF หน้า 11 และ 16',
  },
  {
    id: 22,
    topic: 'Production mindset / interfaces',
    chapter: 'บทที่ 1',
    prompt: 'ทีมมีแผนย้ายแหล่งข้อมูลจาก PHP API ไป Firestore หลัก “program to an interface” ช่วยเรื่องนี้อย่างไร?',
    options: [
      'ให้หน้าจอเรียกผ่านสัญญาเดียว แล้วสลับ implementation ที่อยู่ข้างหลัง',
      'ให้ทุก widget ตรวจเองว่าตอนนี้ใช้ PHP หรือ Firestore',
      'เก็บ URL ของ backend ไว้ในทุกหน้าจอเพื่อเปลี่ยนได้สะดวก',
      'ตัด model ออกแล้วใช้ dynamic เพื่อให้รับข้อมูลได้ทุกแบบ',
    ],
    answer: 0,
    explanation: 'หน้าจอควรรู้ว่าขอข้อมูลอะไรได้ผ่านสัญญา โดยไม่ต้องรู้แหล่งข้อมูล การแยก implementation ช่วยเปลี่ยน backend และใช้ของปลอมในเทสได้ ส่วนการกระจายเงื่อนไขหรือ URL ใน widget เพิ่มจุดที่ต้องแก้ และ dynamic ไม่ได้แก้การผูกติดกับ backend',
    source: 'PDF หน้า 14–15',
  },
  {
    id: 23,
    topic: 'Production mindset / analyzer',
    chapter: 'บทที่ 1',
    prompt: 'ในโค้ด List<dynamic> ผู้พัฒนาเขียนชื่อ field เป็น “titel” แล้วเพิ่งพบปัญหาตอนรัน แนวทางใดช่วยจับความผิดพลาดลักษณะนี้ตั้งแต่พัฒนา?',
    options: [
      'ปิดคำเตือนของ analyzer เพื่อให้เขียนโค้ดเร็วขึ้น',
      'ใช้ model ที่มีชนิดชัดเจน เปิด strict mode และรัน flutter analyze',
      'ย้าย dynamic ไปเก็บในตัวแปร global',
      'เปลี่ยน List เป็น Map<dynamic, dynamic> ทุกจุด',
    ],
    answer: 1,
    explanation: 'ชนิดข้อมูลที่ชัดเจนและ strict-casts, strict-inference, strict-raw-types ช่วยให้ analyzer เตือนปัญหาได้เร็วขึ้น การปิดคำเตือนหรือย้าย dynamic ไปที่อื่นยังไม่ได้เพิ่มการตรวจชนิดข้อมูล',
    source: 'PDF หน้า 13 และ 15–16',
  },
  {
    id: 24,
    topic: 'Riverpod / side effects',
    chapter: 'บทที่ 2',
    prompt: 'ต้องแสดง SnackBar เมื่อ provider เปลี่ยนเป็น error โดยไม่ให้ตัวฟังเป็นเหตุให้ widget rebuild ควรใช้วิธีใด?',
    options: [
      'เรียก showSnackBar ทุกครั้งใน build()',
      'ใช้ ref.read อย่างเดียวเพื่อรอฟังทุกการเปลี่ยนแปลง',
      'ใช้ ref.watch แล้วทำ navigation ทุกครั้งที่ build',
      'ใช้ ref.listen และตรวจ state ใหม่ใน callback',
    ],
    answer: 3,
    explanation: 'ref.listen มีไว้ตอบสนองต่อการเปลี่ยน state ด้วย side effect เช่น SnackBar หรือ navigation โดยการฟังนี้ไม่สั่ง rebuild ส่วน read ไม่ได้ subscribe และ build อาจถูกเรียกซ้ำ จึงไม่ควรทำ side effect ทุกครั้งใน build',
    source: 'PDF หน้า 27',
  },
  {
    id: 25,
    topic: 'Riverpod / family & lifecycle',
    chapter: 'บทที่ 2',
    prompt: 'หน้ารายละเอียดโน้ตต้องแยก state ตาม id และปล่อย state เมื่อไม่มีผู้ฟังแล้ว ควรจับคู่เครื่องมือใด?',
    options: [
      'select แยก id และ read ทำลาย state',
      'invalidate แยก id และ watch ทำลาย state',
      'family รับ id และ autoDispose จัดการ state เมื่อไม่มีผู้ฟัง',
      'ProviderScope แยก id และ AsyncValue.guard ทำลาย state',
    ],
    answer: 2,
    explanation: 'family ทำให้ provider มีหลายชุดตามพารามิเตอร์ ส่วน autoDispose ดูแลอายุของ state เมื่อไม่มีผู้ฟัง พารามิเตอร์ต้องมี == และ hashCode ที่ถูกต้อง select ลดขอบเขตการฟัง แต่ไม่ได้สร้างชุด state ตาม id และ guard จัดการผล async ไม่ใช่วงจรชีวิต',
    source: 'PDF หน้า 25–26',
  },
  {
    id: 26,
    topic: 'Riverpod / select',
    chapter: 'บทที่ 2',
    prompt: 'widget แสดงเฉพาะจำนวนโน้ต ใช้ notesProvider.select((value) => value.value?.length ?? 0) ถ้าแก้ชื่อโน้ตหนึ่งรายการโดยจำนวนยังเท่าเดิม ข้อใดตรงกับหลัก select?',
    options: [
      'widget นี้ไม่ต้อง rebuild จากการเปลี่ยนครั้งนั้น เพราะค่าจำนวนที่เลือกยังเท่าเดิม',
      'widget นี้ต้อง rebuild เสมอ เพราะทุก field ของโน้ตถูกเลือกไว้',
      'select จะป้องกันไม่ให้ชื่อโน้ตใน provider เปลี่ยน',
      'select ทำให้ provider กลายเป็นการอ่านครั้งเดียวเหมือน read',
    ],
    answer: 0,
    explanation: 'select subscribe เฉพาะค่าที่เลือก ในตัวอย่างคือจำนวนโน้ต เมื่อจำนวนไม่เปลี่ยน widget จึงไม่ต้อง rebuild จากการอัปเดตนั้น select ไม่ได้ห้ามเปลี่ยน state และยังเป็นการฟัง ไม่ใช่ read ครั้งเดียว',
    source: 'PDF หน้า 26–27',
  },
  {
    id: 27,
    topic: 'Riverpod / retry',
    chapter: 'บทที่ 2',
    prompt: 'ผู้ใช้กด “ลองใหม่” หลัง notesProvider โหลดล้มเหลว และ UI ยัง watch provider นี้อยู่ ref.invalidate(notesProvider) มีหน้าที่ใด?',
    options: [
      'เปลี่ยน error ให้เป็น data โดยไม่ต้องโหลดข้อมูลใหม่',
      'ยกเลิก ProviderScope ทั้งแอป',
      'แก้ข้อมูลบน backend โดยอัตโนมัติ',
      'ทิ้ง state เดิมของ provider เพื่อให้คำนวณหรือรัน build() ใหม่',
    ],
    answer: 3,
    explanation: 'invalidate ทำให้ state เดิมใช้ไม่ได้ และ provider ที่ยังมีผู้ฟังจะคำนวณใหม่ จึงเหมาะกับ retry และ refresh มันไม่ได้ปลอมผลสำเร็จ ไม่ได้แก้ backend และไม่ได้ยกเลิก ProviderScope',
    source: 'PDF หน้า 23–24',
  },
  {
    id: 28,
    topic: 'BLoC / sealed state',
    chapter: 'บทที่ 3',
    prompt: 'กำหนด NotesState เป็น sealed class และวาด UI ด้วย exhaustive switch หากเพิ่ม state ใหม่ ข้อดีสำคัญคืออะไร?',
    options: [
      'Dart สร้าง UI สำหรับ state ใหม่ให้เอง',
      'คอมไพเลอร์ช่วยชี้ switch ที่ยังจัดการ state ไม่ครบ',
      'ไม่ต้องใช้ BlocProvider อีกต่อไป',
      'state ทั้งหมดกลายเป็น mutable โดยอัตโนมัติ',
    ],
    answer: 1,
    explanation: 'sealed class ทำให้คอมไพเลอร์รู้กลุ่ม subtype และตรวจความครบถ้วนของ switch ได้ การเพิ่ม state จึงเผยจุดที่ต้องแก้ แต่ไม่ได้สร้าง widget ให้ ไม่ได้แทน DI และไม่ได้เปลี่ยน state ให้ mutable',
    source: 'PDF หน้า 31 และ 37',
  },
  {
    id: 29,
    topic: 'BLoC / immutable updates',
    chapter: 'บทที่ 3',
    prompt: 'หลังลบโน้ต นักพัฒนาแก้ List เดิมใน state แล้วพบว่า UI ไม่อัปเดต แนวทางใดสอดคล้องกับเอกสาร?',
    options: [
      'สร้าง Bloc ใหม่ทุกครั้งใน build() เพื่อบังคับเริ่มใหม่',
      'แก้ List เดิมต่อ แล้วเรียก navigation จาก BlocBuilder',
      'สร้าง List ใหม่ แล้ว emit state ใหม่ผ่าน copyWith',
      'ย้ายการแก้ List ไปไว้ใน Text widget',
    ],
    answer: 2,
    explanation: 'ตัวอย่างลบโน้ตสร้างรายการใหม่ด้วย where(...).toList() แล้ว emit ผ่าน copyWith เพื่อเปลี่ยน state อย่างชัดเจน การ mutate List เดิมเป็นข้อผิดพลาดที่เอกสารเตือน การสร้าง Bloc ซ้ำใน build ทำให้ state หาย และ navigation เป็นหน้าที่ของ listener',
    source: 'PDF หน้า 35 และ 37–38',
  },
  {
    id: 30,
    topic: 'BLoC / bloc_test',
    chapter: 'บทที่ 3',
    prompt: 'bloc_test ส่ง NotesRequested แล้ว repository สำเร็จ ลำดับ state ที่ตัวอย่างในเอกสารคาดหวังคือข้อใด?',
    options: [
      'NotesLoaded แล้ว NotesLoading',
      'NotesFailure แล้ว NotesInitial',
      'NotesInitial เท่านั้น โดยไม่สนผลจาก repository',
      'NotesLoading แล้ว NotesLoaded',
    ],
    answer: 3,
    explanation: 'handler emit Loading ก่อนรอ fetchAll แล้ว emit Loaded เมื่อสำเร็จ bloc_test จึงตรวจลำดับที่ปล่อยหลัง action นี้ ไม่ใช่เพียง state สุดท้าย ส่วน Failure เป็นเส้นทางล้มเหลว การเปรียบเทียบ state ในเทสต้องมี == ที่เหมาะสมด้วย',
    source: 'PDF หน้า 35 และ 38–39',
  },
  {
    id: 31,
    topic: 'Architecture / repository contract',
    chapter: 'บทที่ 4',
    prompt: 'การออกแบบ NoteRepository ควรเริ่มจากมุมมองใดตามเอกสาร?',
    options: [
      'งานและข้อมูลที่ controller ต้องการ โดยซ่อนรายละเอียด endpoint ไว้ข้างหลัง',
      'สร้าง method ใน Domain ให้ตรงกับชื่อไฟล์ PHP ทุกไฟล์เสมอ',
      'ให้สัญญาคืน Dio Response เพื่อให้ทุกหน้ารู้จัก HTTP',
      'ให้ widget ตัดสินใจเองว่าจะอ่าน cache หรือเรียก Firestore',
    ],
    answer: 0,
    explanation: 'สัญญาต้องออกแบบเพื่อผู้ใช้สัญญา คือ controller และซ่อนแหล่งข้อมูล ไม่ควรผูกกับรูปแบบ endpoint หรือชนิด Response ของ Dio การให้ widget เลือกแหล่งข้อมูลยังทำให้ UI รู้รายละเอียด Data layer',
    source: 'PDF หน้า 45',
  },
  {
    id: 32,
    topic: 'Architecture / use cases',
    chapter: 'บทที่ 4',
    prompt: 'กฎ “เก็บถาวรโน้ตที่ไม่แก้ไขเกิน 90 วัน” ถูกใช้จากหลายหน้าจอ ควรวางกฎและออกแบบเวลาเพื่อทดสอบอย่างไร?',
    options: [
      'คัดลอกกฎไปไว้ใน build() ของทุกหน้า',
      'เขียนเป็น use case ใน Domain และรับค่า now เพื่อควบคุมเวลาในเทส',
      'เขียนไว้ใน DTO.fromJson และอ่าน DateTime.now() อย่างเดียว',
      'ย้ายกฎทั้งหมดไปที่ theme เพื่อให้ใช้ร่วมกันง่าย',
    ],
    answer: 1,
    explanation: 'use case รวบกฎธุรกิจที่ซับซ้อนหรือใช้ซ้ำไว้ใน Domain และพารามิเตอร์ now ทำให้เทสตรวจขอบ 90 วันได้แน่นอน UI มีหน้าที่แสดงผล DTO มีหน้าที่แปลงข้อมูล และ theme ไม่ใช่ที่เก็บกฎธุรกิจ',
    source: 'PDF หน้า 51–52 และ 93',
  },
  {
    id: 33,
    topic: 'Architecture / feature-first',
    chapter: 'บทที่ 4',
    prompt: 'ข้อใดเป็นเหตุผลหลักของการจัดโฟลเดอร์แบบ Feature-first เช่น features/notes/{data, domain, presentation}?',
    options: [
      'ทำให้ทุกฟีเจอร์ import หน้าจอของกันและกันได้อิสระ',
      'ทำให้ไฟล์ทุกประเภทต้องอยู่รวมใน core',
      'ทำให้ไม่ต้องแบ่งชั้น Data, Domain และ Presentation',
      'ให้ไฟล์ที่เปลี่ยนด้วยกันเมื่อแก้ฟีเจอร์อยู่ใกล้กัน และแยกของใช้ร่วมไว้ใน core',
    ],
    answer: 3,
    explanation: 'Feature-first รวมไฟล์ของฟีเจอร์เดียวกันและยังแบ่งชั้นภายใน core เก็บของใช้ร่วมที่ไม่ขึ้นกับฟีเจอร์ใด การ import หน้าจอข้ามฟีเจอร์โดยตรงเพิ่มการผูกติด ส่วนการย้ายทุกอย่างเข้า core หรือเลิกแบ่งชั้นไม่ใช่เป้าหมายของแนวทางนี้',
    source: 'PDF หน้า 52–53',
  },
  {
    id: 34,
    topic: 'Architecture / when to separate',
    chapter: 'บทที่ 4',
    prompt: 'ข้อใดเป็นสัญญาณที่มีเหตุผลว่าควรเริ่มแยกชั้นและ Repository?',
    options: [
      'แอป BMI หน้าเดียว ไม่มีข้อมูลแชร์หรือกฎธุรกิจซับซ้อน',
      'ต้องการเพิ่มจำนวนไฟล์ให้ดูเหมือนโปรเจกต์ใหญ่',
      'สองหน้าคัดลอกโค้ดเรียก API เดียวกัน และเขียนเทสโดยไม่เรียก network ไม่ได้',
      'เพียงเพราะทุกตัวอย่างบนอินเทอร์เน็ตมี Repository',
    ],
    answer: 2,
    explanation: 'เอกสารให้แยกจากปัญหาจริง เช่น โค้ดซ้ำ ทดสอบยาก หรือกำลังเปลี่ยน backend แอปเล็กหน้าเดียวอาจไม่ต้องมี Repository และการเพิ่ม abstraction เพื่อจำนวนไฟล์หรือเลียนแบบตัวอย่างไม่ได้ตอบปัญหาของโปรเจกต์',
    source: 'PDF หน้า 53',
  },
  {
    id: 35,
    topic: 'Dependency Injection / get_it lifecycle',
    chapter: 'บทที่ 5',
    prompt: 'ต้องการ Dio ที่สร้างเมื่อขอครั้งแรกแล้วใช้ตัวเดิม และ NotesBloc ที่สร้างใหม่ทุกครั้งที่ขอ ควรลงทะเบียน get_it แบบใด?',
    options: [
      'Dio ใช้ registerFactory; NotesBloc ใช้ registerSingleton',
      'ทั้งสองใช้ registerFactory เพื่อใช้ instance เดิม',
      'ทั้งสองใช้ registerLazySingleton เพื่อสร้าง Bloc ใหม่ทุกครั้ง',
      'Dio ใช้ registerLazySingleton; NotesBloc ใช้ registerFactory',
    ],
    answer: 3,
    explanation: 'registerLazySingleton สร้างเมื่อถูกขอครั้งแรกแล้วคืนตัวเดิม ส่วน registerFactory สร้างใหม่ทุกครั้ง registerSingleton สร้างทันทีตอนลงทะเบียน ตัวเลือกอื่นจึงสลับความหมายหรือตอบไม่ตรงวงจรชีวิตที่ต้องการ',
    source: 'PDF หน้า 58',
  },
  {
    id: 36,
    topic: 'Code generation / freezed',
    chapter: 'บทที่ 5',
    prompt: 'ต้องเปลี่ยน pinned ของ Note โดยรักษาแนวคิด immutable และให้ model ที่ข้อมูลเหมือนกันเปรียบเทียบเท่ากันได้ freezed ช่วยอย่างไร?',
    options: [
      'สร้าง copyWith เพื่อคืน model ใหม่ พร้อม == และ hashCode ตามฟิลด์',
      'แก้ object เดิมทุกจุดพร้อมกันโดยไม่สร้างค่าใหม่',
      'สร้าง Dio client และ refresh token ให้โดยอัตโนมัติ',
      'ทำให้ทุก model กลายเป็น JSON และยกเลิก Entity ได้',
    ],
    answer: 0,
    explanation: 'freezed สร้าง immutable model พร้อม copyWith และ value equality ซึ่งเหมาะกับ Bloc และ family provider copyWith สร้างค่าที่แก้บางฟิลด์โดยไม่ mutate เดิม ส่วน network และการแยก DTO/Entity เป็นคนละหน้าที่',
    source: 'PDF หน้า 58–60',
  },
  {
    id: 37,
    topic: 'Code generation / JSON converters',
    chapter: 'บทที่ 5',
    prompt: 'PHP API ส่ง is_pinned เป็น “1” แต่ Dart ใช้ bool isPinned วิธีใดตรงกับแนวทาง json_serializable ในเอกสาร?',
    options: [
      'ให้ทุก widget แปลง “1” เป็น bool เอง',
      'ใช้ FieldRename.snake จับคู่ชื่อ และ JsonConverter แปลงค่าที่ DTO',
      'ใช้ freezed กับ Entity แล้วไม่ต้องแปลงรูปแบบข้อมูลอีก',
      'ลบชนิด bool แล้วใช้ dynamic ใน Domain ทั้งหมด',
    ],
    answer: 1,
    explanation: 'FieldRename.snake จัดการชื่อ isPinned ↔ is_pinned ส่วน converter จัดการค่า “1”/“0” ให้เป็น bool ทั้งสองเป็นงานที่ DTO ทำรวมไว้ที่เดียว การแปลงในทุก widget ซ้ำซ้อน freezed ไม่ได้เดารูปแบบ backend ให้เอง และ dynamic ทำให้เสียการตรวจชนิด',
    source: 'PDF หน้า 61–62',
  },
  {
    id: 38,
    topic: 'Code generation / generated files',
    chapter: 'บทที่ 5',
    prompt: 'แก้ไฟล์ note_dto.g.dart ด้วยมือแล้วโค้ดที่แก้หายหลังรัน build_runner ควรจัดการอย่างไร?',
    options: [
      'หยุดใช้ generator แล้วแก้ .g.dart หลังทุก build',
      'ย้าย .g.dart ไปใส่ใน widget เพื่อไม่ให้ถูกสร้างใหม่',
      'ปิด analyzer แล้วถือว่าไฟล์ generate ถูกต้องเสมอ',
      'แก้นิยาม DTO, annotation หรือ converter ต้นทาง แล้ว generate ใหม่',
    ],
    answer: 3,
    explanation: '.g.dart และ .freezed.dart เป็นผลผลิตที่ generator เขียนทับได้ จึงต้องแก้ต้นทางและรัน build_runner ใหม่ หากทีมไม่ commit ไฟล์ generate ต้องเพิ่มขั้นตอนสร้างใน CI ด้วย การแก้ปลายทางซ้ำหรือปิด analyzer ไม่ได้แก้สาเหตุ',
    source: 'PDF หน้า 59 และ 63–64',
  },
  {
    id: 39,
    topic: 'Networking / token storage',
    chapter: 'บทที่ 6',
    prompt: 'ตามเอกสาร TokenStore ที่เก็บ access token และ refresh token ควรใช้สิ่งใดเป็นที่เก็บหลักบนอุปกรณ์?',
    options: [
      'SharedPreferences โดยถือว่าข้อมูลใน backup อ่านไม่ได้',
      'ใส่ token ใน URL ทุก request เพื่อให้ง่ายต่อการ debug',
      'flutter_secure_storage',
      'ฝัง token จริงไว้ใน source code เพื่อไม่ให้ผู้ใช้เปลี่ยน',
    ],
    answer: 2,
    explanation: 'เอกสารแนะนำ secure storage สำหรับ token ซึ่งเป็นข้อมูลรับรองสิทธิ์ และเตือนว่า SharedPreferences อาจถูกอ่านจาก backup ได้ การใส่ URL หรือฝัง source code ยังเพิ่มโอกาสเผยข้อมูลรับรอง',
    source: 'PDF หน้า 70',
  },
  {
    id: 40,
    topic: 'Networking / Failure & Result',
    chapter: 'บทที่ 6',
    prompt: 'repository จับ DioException ชนิด connectionTimeout ได้ ควรส่งผลให้ Presentation อย่างไรตามแนว Failure/Result?',
    options: [
      'แปลงเป็น Failure.network แล้วคืน Result.failure เพื่อให้ UI เลือกข้อความและการตอบสนองได้',
      'คืนรายการว่างเป็น success เพื่อซ่อนความล้มเหลว',
      'ส่ง DioException ให้ทุก widget ตรวจชนิดเอง',
      'แปลงเป็น UnauthorizedFailure ทุกครั้งเพื่อให้ผู้ใช้ล็อกอินใหม่',
    ],
    answer: 0,
    explanation: 'Data layer แปลงรายละเอียด network เป็น Failure ที่ชั้นอื่นใช้ได้ connectionTimeout จัดเป็น network failure ไม่ใช่ unauthorized การคืนรายการว่างปะปนกับกรณีข้อมูลไม่มีจริง และการส่ง DioException ไป UI ทำให้ Presentation ผูกกับ Dio',
    source: 'PDF หน้า 71–73',
  },
  {
    id: 41,
    topic: 'Networking / backoff & jitter',
    chapter: 'บทที่ 6',
    prompt: 'GET ล้มเหลวชั่วคราวด้วย 503 และอนุญาตให้ retry ได้ ทำไมควรใช้ exponential backoff พร้อม jitter?',
    options: [
      'เพื่อรับประกันว่าเซิร์ฟเวอร์จะสำเร็จในครั้งถัดไป',
      'เพิ่มช่วงรอและกระจายเวลา retry ลดการยิงซ้ำพร้อมกันจากหลายเครื่อง',
      'เพื่อเปลี่ยน GET เป็น POST โดยอัตโนมัติ',
      'เพื่อให้ retry ได้ไม่จำกัดโดยไม่ต้องมี maxAttempts',
    ],
    answer: 1,
    explanation: 'backoff เพิ่มช่วงรอระหว่างความพยายาม และ jitter เติมความแปรผันไม่ให้หลายเครื่อง retry พร้อมกันเมื่อเซิร์ฟเวอร์ฟื้น แต่ไม่ได้รับประกันผล ไม่เปลี่ยน HTTP method และยังต้องจำกัดจำนวนครั้งและเลือกความล้มเหลวที่ retry ได้',
    source: 'PDF หน้า 73–74',
  },
  {
    id: 42,
    topic: 'Networking / offline sync queue',
    chapter: 'บทที่ 6',
    prompt: 'ผู้ใช้สร้างโน้ตตอนออฟไลน์ ตามตัวอย่าง sync queue ข้อใดอธิบายลำดับที่เหมาะสม?',
    options: [
      'รอจนออนไลน์เท่านั้น และไม่เก็บงานที่ผู้ใช้พิมพ์ไว้',
      'สร้าง id จริงขึ้นเอง แล้วถือว่าส่ง backend สำเร็จแน่นอน',
      'เมื่อเห็น Wi-Fi ให้ล้าง pending ทั้งหมดโดยไม่ตรวจผล request',
      'บันทึก local พร้อม pending create และ id ชั่วคราว แล้วส่งตามคิวและแทนด้วย id จริงเมื่อสำเร็จ',
    ],
    answer: 3,
    explanation: 'local และ pending operation รักษางานของผู้ใช้ระหว่างออฟไลน์ เมื่อส่ง create สำเร็จจึงแทน id ชั่วคราวด้วย id จริง หากเน็ตหลุดต้องหยุดคิวและลองต่อภายหลัง การพบ Wi-Fi ไม่ได้ยืนยันว่าถึงเซิร์ฟเวอร์ จึงยังล้าง pending โดยไม่ดูผลไม่ได้',
    source: 'PDF หน้า 76–78',
  },
  {
    id: 43,
    topic: 'Performance / isolates',
    chapter: 'บทที่ 7',
    prompt: 'แอป parse JSON ขนาดใหญ่บน main isolate แม้ใส่ async/await แล้วยังทำให้ UI ค้าง แนวทางใดเหมาะกับงาน CPU หนักนี้?',
    options: [
      'ใส่ await เพิ่มทุกบรรทัดเพื่อให้ CPU ทำงานขนานเอง',
      'ย้าย parsing ไปไว้ใน build() เพื่อให้ Flutter จัดการ',
      'ใช้ Isolate.run หรือ compute โดยประเมินต้นทุนการส่งข้อมูลและสร้าง isolate',
      'ครอบหน้าจอด้วย RepaintBoundary เพื่อย้าย parsing ไป Raster thread',
    ],
    answer: 2,
    explanation: 'async ช่วยงานที่รอ I/O แต่ไม่ย้ายการคำนวณออกจาก main isolate งาน CPU หนักจึงควรย้ายไป isolate อื่นเมื่อคุ้มต้นทุน RepaintBoundary แยกงาน paint ไม่ใช่ parsing และการคำนวณใน build ยิ่งบล็อก UI',
    source: 'PDF หน้า 84–85',
  },
  {
    id: 44,
    topic: 'Performance / image memory',
    chapter: 'บทที่ 7',
    prompt: 'แสดงภาพ 4000×3000 ในช่อง 80×80 แล้วใช้แรมมาก การกำหนด width/height สำหรับ layout อย่างเดียวไม่พอ ควรทำอะไรเพิ่มเติม?',
    options: [
      'กำหนด cacheWidth/cacheHeight ตามขนาดแสดงจริงและ devicePixelRatio พร้อมใช้ thumbnail ที่เหมาะสม',
      'โหลดภาพต้นฉบับทุกครั้งเพื่อให้ได้รายละเอียดสูงที่สุด',
      'เพิ่ม Opacity ครอบภาพเพื่อให้ใช้แรมน้อยลง',
      'สร้าง Image widget ทุกภาพล่วงหน้าใน Column',
    ],
    answer: 0,
    explanation: 'ขนาด decode มีผลต่อแรม ภาพ 4000×3000 ที่ 4 ไบต์ต่อพิกเซลใช้ราว 48 MB แม้แสดงเล็ก cacheWidth/cacheHeight ลดขนาด decode โดยเผื่อ devicePixelRatio ส่วน thumbnail ลดข้อมูลที่โหลด การลด opacity หรือสร้างทุกภาพล่วงหน้าไม่แก้ปัญหานี้',
    source: 'PDF หน้า 86',
  },
  {
    id: 45,
    topic: 'Testing / golden',
    chapter: 'บทที่ 8',
    prompt: 'ต้องตรวจว่า NoteTile ที่ปักหมุดยังมีหน้าตาเหมือนภาพต้นแบบหลังแก้โค้ด ควรใช้การทดสอบใด?',
    options: [
      'Unit test ของสูตรคำนวณวันที่อย่างเดียว',
      'Golden test และควบคุมฟอนต์/สภาพแวดล้อมที่ใช้สร้างและเทียบภาพ',
      'ตรวจจำนวน method ที่เรียกด้วย mock อย่างเดียว',
      'Integration test ของ login อย่างเดียว',
    ],
    answer: 1,
    explanation: 'Golden test เปรียบเทียบภาพที่ render กับภาพต้นแบบ จึงตรวจความเปลี่ยนแปลงหน้าตา component ได้ ฟอนต์และ OS อาจทำให้ภาพต่าง จึงต้องควบคุมสภาพแวดล้อม การตรวจ logic, method call หรือ flow login อย่างเดียวไม่ได้เทียบภาพ NoteTile',
    source: 'PDF หน้า 98–99',
  },
  {
    id: 46,
    topic: 'Testing / fake vs mock',
    chapter: 'บทที่ 8',
    prompt: 'ต้องทดสอบ use case ด้วย repository ที่เก็บ List ในหน่วยความจำ และอีกเทสต้องบังคับ remote source ให้ throw timeout ข้อใดแยก fake กับ mock ได้ถูกต้อง?',
    options: [
      'fake และ mock จำเป็นต้องเรียก backend จริงทั้งคู่',
      'mock คือฐานข้อมูล production ส่วน fake คือไฟล์ golden',
      'fake ใช้ได้เฉพาะ widget test และ mock ใช้ได้เฉพาะ integration test',
      'fake เป็น implementation แบบง่ายที่ทำงานได้ ส่วน mock ตั้งพฤติกรรมคืนค่าหรือ throw เพื่อควบคุมเทสได้',
    ],
    answer: 3,
    explanation: 'fake ในเอกสารเก็บข้อมูลจริงแบบง่ายใน List และใช้ซ้ำในเทส Domain ส่วน mock ของ remote source ให้กำหนดผลหรือ exception ได้เพื่อทดสอบ mapping โดยไม่เรียกเครือข่ายจริง ทั้งสองไม่ได้จำกัดเฉพาะระดับการทดสอบตามตัวเลือกอื่น',
    source: 'PDF หน้า 91 และ 93–94',
  },
  {
    id: 47,
    topic: 'Navigation / go vs push',
    chapter: 'บทที่ 9',
    prompt: 'หน้าเลือกสีต้องเปิดทับหน้าปัจจุบัน แล้วกลับมาพร้อมสีที่เลือก context.go กับ context.push ต่างกันอย่างไรตามเอกสาร?',
    options: [
      'go เพิ่มหน้าทับเสมอ ส่วน push แทนที่ stack ตาม URL',
      'ทั้งสองทำงานเหมือนกัน และคืนผลไม่ได้',
      'push วางหน้าทับ stack เดิม ส่วน go จัด stack ตาม URL และโครงสร้าง route ที่ประกาศ',
      'push ใช้ได้เฉพาะหน้าแรกของแอป',
    ],
    answer: 2,
    explanation: 'เอกสารใช้ push สำหรับกรณีต้องกลับมาที่เดิมพร้อมผล เช่น เลือกสี ส่วน go เปลี่ยนตำแหน่งตาม URL และ route ที่ประกาศ จึงให้ผลสอดคล้องกับ deep link ตัวเลือกอื่นสลับความหมายหรือกำหนดข้อจำกัดที่ไม่ได้มี',
    source: 'PDF หน้า 106',
  },
  {
    id: 48,
    topic: 'Native / platform channels',
    chapter: 'บทที่ 9',
    prompt: 'ต้องขอระดับแบตเตอรี่หนึ่งครั้ง รับสถานะประหยัดพลังงานต่อเนื่อง และลดข้อผิดพลาดของสัญญา Dart/native ข้อใดจับคู่ได้ถูกต้อง?',
    options: [
      'MethodChannel สำหรับเรียกแล้วรับผล, EventChannel สำหรับ stream, pigeon สำหรับ generate สัญญาที่มีชนิดข้อมูลชัดเจน',
      'EventChannel สำหรับเรียกครั้งเดียว, MethodChannel สำหรับ stream, pigeon สำหรับเซ็น APK',
      'go_router สำหรับข้อมูลแบตเตอรี่, freezed สำหรับ channel, build_runner สำหรับรับ stream จาก OS',
      'ทุกงานใช้ชื่อ method เป็น string โดย pigeon ไม่มีผลต่อการตรวจสัญญา',
    ],
    answer: 0,
    explanation: 'MethodChannel เหมาะกับ request/response ส่วน EventChannel รับเหตุการณ์ต่อเนื่อง pigeon สร้างโค้ดทั้ง Dart, Kotlin และ Swift จากสัญญาที่ระบุชนิด ช่วยให้ความไม่ตรงกันถูกพบได้เร็ว มันไม่ใช่เครื่องมือ navigation หรือ signing',
    source: 'PDF หน้า 107–108 และ 110–111',
  },
  {
    id: 49,
    topic: 'Release / signing',
    chapter: 'บทที่ 10',
    prompt: 'ก่อนปล่อย Android release ทีมควรจัดการ keystore และ key.properties อย่างไรตามเอกสาร?',
    options: [
      'commit keystore และรหัสผ่านใน repository สาธารณะเพื่อให้ CI ใช้ง่าย',
      'ใช้ release signing ของทีม เก็บกุญแจและรหัสผ่านอย่างปลอดภัย สำรองไว้ และไม่ commit key.properties',
      'ใช้ debug key ทุกเวอร์ชันเพราะไม่ต้องสำรองกุญแจ',
      'สร้าง signing identity ใหม่ทุกครั้งที่อัปเดตแอป',
    ],
    answer: 1,
    explanation: 'การอัปเดตแอปต้องรักษา signing identity และเก็บกุญแจอย่างมีวินัย เอกสารแนะนำ password manager และสำรองอย่างน้อยสองที่ โดยห้าม commit key.properties; Play App Signing ช่วยจัดการ app signing key และแยก upload key ได้ การเปิดเผยกุญแจหรือใช้ debug key ไม่ใช่แนวทาง release',
    source: 'PDF หน้า 117–119',
  },
  {
    id: 50,
    topic: 'Release / obfuscation & symbols',
    chapter: 'บทที่ 10',
    prompt: 'ปล่อย build ด้วย --obfuscate --split-debug-info=build/symbols/prod แล้วได้รับ crash report ทำไมต้องเก็บ symbols แยกตามเวอร์ชัน?',
    options: [
      'เพราะ symbols เป็นที่เก็บ secret ที่ผู้ใช้ถอดออกมาไม่ได้',
      'เพราะ symbols ใช้แทน keystore สำหรับอัปเดตแอป',
      'เพราะ obfuscate ป้องกัน crash ได้ก็ต่อเมื่อมี symbols',
      'เพื่อใช้ถอด stack trace ของ build ที่เปลี่ยนชื่อ class/method ให้อ่านได้',
    ],
    answer: 3,
    explanation: 'obfuscate เปลี่ยนชื่อใน Dart และ split-debug-info เก็บข้อมูลสำหรับแปล stack trace แยกไว้ ต้องใช้ symbols ของเวอร์ชันที่เกิด crash การ obfuscate ไม่ได้เข้ารหัส secret ไม่ได้แทน signing และไม่ได้ป้องกัน crash',
    source: 'PDF หน้า 119',
  },
];

const examSets = [
  {
    id: 'trial-20',
    title: 'ลองสนาม 20 ข้อ',
    eyebrow: 'TRIAL SET · 20 ITEMS',
    description: 'เช็กภาพรวม Advanced Flutter ครบทั้ง 10 บท พร้อมเฉลยแบบรู้ว่าพลาดตรงไหน',
    meta: 'ประมาณ 15–20 นาที',
    questions: [
      {
        id: 1,
        topic: 'Production mindset',
        chapter: 'บทที่ 1',
        prompt: 'หลัก Single Source of Truth มีเป้าหมายสำคัญที่สุดข้อใด?',
        options: [
          'ให้แต่ละหน้าจอมีสำเนาข้อมูลของตัวเองเพื่อทำงานได้เร็วขึ้น',
          'ให้ข้อมูลหนึ่งชุดมีเจ้าของหลักเพียงที่เดียว แล้วส่วนอื่นรับข้อมูลจากเจ้าของนั้น',
          'ให้ทุก API ใช้ฐานข้อมูลเดียวกันเสมอ',
          'ลดขนาด APK ด้วยการลบ model ที่ซ้ำกัน',
        ],
        answer: 1,
        explanation: 'Single Source of Truth ลดข้อมูลสำเนาที่อาจไม่ตรงกัน เช่น หน้ารายการกับหน้ารายละเอียดต่างคนต่างถือสถานะโน้ตคนละชุด',
        source: 'PDF หน้า 14 และ 17',
      },
      {
        id: 2,
        topic: 'Riverpod / data flow',
        chapter: 'บทที่ 2',
        prompt: 'ลำดับ Unidirectional Data Flow ที่ตรงกับเอกสารที่สุดคือข้อใด?',
        options: [
          'UI → State → Action → Controller',
          'State → Backend → UI → Action',
          'Action → Controller/Notifier → State → UI',
          'Backend → UI → State → Controller',
        ],
        answer: 2,
        explanation: 'ผู้ใช้ก่อให้เกิด action, controller หรือ notifier ประมวลผลและเปลี่ยน state จากนั้น UI จึง rebuild จาก state ใหม่',
        source: 'PDF หน้า 18',
      },
      {
        id: 3,
        topic: 'Riverpod / providers',
        chapter: 'บทที่ 2',
        prompt: 'ต้องโหลดรายการ Notes แบบ async และให้ UI เรียก method เพิ่ม/ลบข้อมูลได้ ควรเลือก provider ใด?',
        options: ['Provider', 'FutureProvider', 'AsyncNotifierProvider', 'StreamProvider'],
        answer: 2,
        explanation: 'AsyncNotifierProvider เหมาะกับ async state ที่มี method แก้ค่า ส่วน FutureProvider เหมาะกับ async แบบอ่านอย่างเดียว',
        source: 'PDF หน้า 19 และ 21–23',
      },
      {
        id: 4,
        topic: 'Riverpod / listening',
        chapter: 'บทที่ 2',
        prompt: 'ใน build() ต้องการให้ widget rebuild เมื่อ provider เปลี่ยน และตอนกดปุ่มต้องการอ่านค่าเพียงครั้งเดียว ควรจับคู่ใด?',
        options: [
          'build() ใช้ watch และ callback ใช้ read',
          'build() ใช้ read และ callback ใช้ watch',
          'ทั้งสองจุดใช้ listen',
          'build() ใช้ invalidate และ callback ใช้ autoDispose',
        ],
        answer: 0,
        explanation: 'watch ใช้ผูก UI กับ state ใน build ส่วน read ใช้ใน callback เพื่ออ่านหรือเรียก method โดยไม่สร้าง subscription ใหม่',
        source: 'PDF หน้า 21 และ 27',
      },
      {
        id: 5,
        topic: 'Riverpod / async state',
        chapter: 'บทที่ 2',
        prompt: 'ข้อใดอธิบาย AsyncValue.guard และการจัดการ state ใน UI ได้ถูกต้อง?',
        options: [
          'ใช้แทน ProviderScope และมีแค่สถานะ data',
          'ห่อ try/catch ให้ผลเป็น AsyncData หรือ AsyncError และ UI ควรจัดการ loading/data/error ครบ',
          'ใช้เฉพาะกับ StreamProvider และไม่เกี่ยวกับ error',
          'ทำให้ request ทุกตัว retry ได้โดยอัตโนมัติ',
        ],
        answer: 1,
        explanation: 'AsyncValue.guard ช่วยแปลงผลสำเร็จหรือ exception เป็น AsyncData/AsyncError และ .when ช่วยบังคับให้ UI คิดครบทั้งสามสถานะ',
        source: 'PDF หน้า 22–24',
      },
      {
        id: 6,
        topic: 'BLoC / Cubit',
        chapter: 'บทที่ 3',
        prompt: 'ข้อใดเปรียบเทียบ Bloc กับ Cubit ได้ตรงตามเอกสาร?',
        options: [
          'Cubit รับ event เท่านั้น ส่วน Bloc เรียก method ตรง ๆ',
          'Bloc และ Cubit เหมือนกันทุกอย่าง ต่างกันแค่ชื่อ class',
          'Bloc รับ event แล้วปล่อย state ส่วน Cubit ตัด event ออกและให้ UI เรียก method โดยตรง',
          'Cubit ใช้ได้เฉพาะงาน sync ส่วน Bloc ใช้ได้เฉพาะ network',
        ],
        answer: 2,
        explanation: 'Bloc ทำให้ทุกการเปลี่ยนแปลงมี event ที่มีชื่อและ trace ได้ ส่วน Cubit เป็นรูปแบบย่อที่เหมาะกับฟีเจอร์ไม่ซับซ้อน',
        source: 'PDF หน้า 30',
      },
      {
        id: 7,
        topic: 'BLoC / UI responsibilities',
        chapter: 'บทที่ 3',
        prompt: 'ถ้าบันทึกไม่สำเร็จและต้องการแสดง SnackBar โดยไม่ให้การฟังนั้นเป็นตัวสั่ง rebuild ควรใช้ widget ใด?',
        options: ['BlocListener', 'BlocBuilder', 'BlocSelector', 'BlocProvider'],
        answer: 0,
        explanation: 'BlocListener มีไว้ทำ side effect เช่น SnackBar หรือ navigate; BlocBuilder ใช้วาด UI และ BlocSelector ใช้เลือก state บางส่วนเพื่อลด rebuild',
        source: 'PDF หน้า 36–37',
      },
      {
        id: 8,
        topic: 'Architecture / dependency rule',
        chapter: 'บทที่ 4',
        prompt: 'ตามกฎการพึ่งพาของสถาปัตยกรรมสามชั้น ลูกศรควรชี้อย่างไร?',
        options: [
          'Domain พึ่ง Presentation และ Data โดยตรง',
          'Presentation และ Data พึ่ง Domain ส่วน Domain ไม่รู้จักสองชั้นด้านนอก',
          'Presentation พึ่ง Data เท่านั้น และห้ามมี Domain',
          'ทุกชั้น import กันได้อิสระเพื่อความยืดหยุ่น',
        ],
        answer: 1,
        explanation: 'Domain เป็นศูนย์กลางที่มี entity, business rules และ repository interface; Presentation กับ Data จึงเปลี่ยน implementation ได้โดยไม่ลาก Domain ไปด้วย',
        source: 'PDF หน้า 42–43',
      },
      {
        id: 9,
        topic: 'Architecture / Entity & DTO',
        chapter: 'บทที่ 4',
        prompt: 'เหตุผลหลักที่แยก Entity ใน Domain ออกจาก DTO ใน Data คือข้อใด?',
        options: [
          'ทำให้ทุก layer ใช้ JSON รูปแบบเดียวกัน',
          'ทำให้ widget เรียก backend ได้เร็วขึ้น',
          'ทำให้ไม่ต้องมี repository interface',
          'กันความแปลกของ backend เช่น snake_case หรือ string boolean ไม่ให้ลามเข้า Domain',
        ],
        answer: 3,
        explanation: 'Entity สะท้อนความหมายทางธุรกิจและไม่ควรรู้จัก JSON ส่วน DTO เป็นด่านแปลงรูปแบบที่ backend ส่งมาให้เป็น entity',
        source: 'PDF หน้า 43–47',
      },
      {
        id: 10,
        topic: 'Dependency Injection',
        chapter: 'บทที่ 5',
        prompt: 'เหตุใด NotesController จึงควรรับ NoteRepository ผ่าน constructor แทนการสร้าง Dio และ repository เอง?',
        options: [
          'เพื่อให้ controller รู้จัก implementation จริงมากขึ้น',
          'เพื่อบังคับให้ทุก test เรียก network จริง',
          'เพื่อแยกการสร้าง dependency ออกจาก class และสลับของจริง/ของปลอมในการทดสอบได้',
          'เพื่อให้มี Dio หลาย instance ที่ตั้งค่าไม่เหมือนกัน',
        ],
        answer: 2,
        explanation: 'DI ทำให้ class รู้จักเพียงสัญญาและรับของที่ต้องใช้จากภายนอก การสร้าง dependency จึงรวมอยู่ที่ composition root และ test ใช้ fake ได้',
        source: 'PDF หน้า 55–57',
      },
      {
        id: 11,
        topic: 'Networking / token refresh',
        chapter: 'บทที่ 6',
        prompt: 'เมื่อ request 10 ตัวได้ 401 พร้อมกัน วิธี refresh token ที่ปลอดภัยกว่าคือข้อใด?',
        options: [
          'ล็อกให้มี refresh ครั้งเดียว ตัวอื่นรอผล และใช้ Dio แยกสำหรับ refresh',
          'ให้ทุก request refresh พร้อมกันเพื่อให้เร็วที่สุด',
          'retry request เดิมไปเรื่อย ๆ จนกว่าจะได้ 200',
          'เก็บ token ไว้ในตัวแปร global และไม่ต้องใช้ interceptor',
        ],
        answer: 0,
        explanation: 'ต้องกัน race condition ด้วยการให้มี refresh เดียวและ request อื่นรอผล อีกทั้ง Dio สำหรับ refresh ต้องไม่วนกลับเข้า interceptor เดิม',
        source: 'PDF หน้า 68–70',
      },
      {
        id: 12,
        topic: 'Networking / retry',
        chapter: 'บทที่ 6',
        prompt: 'ทำไม POST ที่สร้างข้อมูลใหม่จึงไม่ควร retry อัตโนมัติโดยไม่ออกแบบเพิ่ม?',
        options: [
          'เพราะ POST ช้ากว่า GET เสมอ',
          'เพราะ Dio ไม่รองรับ POST',
          'เพราะ retry ใช้ได้เฉพาะในโหมด debug',
          'ครั้งแรกอาจสำเร็จแต่ response หาย การ retry จึงอาจสร้างข้อมูลซ้ำ ต้องใช้ idempotency key หากจำเป็น',
        ],
        answer: 3,
        explanation: 'การ retry ควรทำกับความล้มเหลวชั่วคราวและ request ที่ทำซ้ำได้อย่างปลอดภัย; POST create ต้องมี idempotency key ให้ backend จำผลเดิม',
        source: 'PDF หน้า 66 และ 73–74',
      },
      {
        id: 13,
        topic: 'Networking / offline',
        chapter: 'บทที่ 6',
        prompt: 'แนวคิด stale-while-revalidate ในแอปโน้ตควรทำงานอย่างไร?',
        options: [
          'รอ network สำเร็จเท่านั้นแล้วจึงแสดงข้อมูล',
          'แสดง cache เก่าก่อน แล้วค่อยดึง network และอัปเดต cache/ผลใหม่',
          'ลบ cache ทุกครั้งที่เปิดแอปเพื่อป้องกันข้อมูลเก่า',
          'ใช้ connectivity_plus เป็นหลักฐานว่า request จะสำเร็จแน่นอน',
        ],
        answer: 1,
        explanation: 'local source ให้ข้อมูลเก่าได้ทันที จากนั้นจึง revalidate ด้วย network; connectivity เป็นเพียงสัญญาณให้ลอง flush ไม่ใช่หลักฐานว่าอินเทอร์เน็ตใช้ได้จริง',
        source: 'PDF หน้า 74–78',
      },
      {
        id: 14,
        topic: 'Performance / frame',
        chapter: 'บทที่ 7',
        prompt: 'ข้อใดถูกต้องเกี่ยวกับ frame และ thread ใน Flutter?',
        options: [
          'ทุก frame มีเวลาไม่จำกัดถ้าใช้ async',
          'Raster thread ทำ build() ส่วน UI thread วาด GPU',
          'จอ 60Hz มีเวลาประมาณ 16 ms ต่อ frame; UI thread ทำ build/layout/paint แล้ว Raster thread วาดจริง',
          'ถ้า frame เกิน 16 ms จะช่วยให้ภาพคมขึ้นโดยอัตโนมัติ',
        ],
        answer: 2,
        explanation: 'งานเกินงบเวลาทำให้เกิด jank; การแยกว่า UI thread หรือ Raster thread ช้าช่วยให้เลือกวิธีแก้ตรงจุด',
        source: 'PDF หน้า 80–81',
      },
      {
        id: 15,
        topic: 'Performance / measurement',
        chapter: 'บทที่ 7',
        prompt: 'วิธีวัด performance ที่น่าเชื่อถือที่สุดตามเอกสารคือข้อใด?',
        options: [
          'วัดใน profile/release บนเครื่องจริงรุ่นกลางก่อน แล้วดู DevTools',
          'ดูจากความรู้สึกใน debug บนอีมูเลเตอร์เครื่องแรง',
          'ใส่ const ทุกจุดก่อนโดยไม่ต้องวัด',
          'วัดเฉพาะเวลาที่แอปเปิดครั้งแรกบนคอมพิวเตอร์',
        ],
        answer: 0,
        explanation: 'Debug มี assertion, hot reload และ JIT ทำให้ตัวเลขคลาดเคลื่อน; ควร profile บนเครื่องจริงก่อน optimize ตาม bottleneck ที่วัดได้',
        source: 'PDF หน้า 81',
      },
      {
        id: 16,
        topic: 'Performance / paint',
        chapter: 'บทที่ 7',
        prompt: 'มีไอคอนหมุนเล็ก ๆ วางทับรายการโน้ตยาว และไม่อยากให้รายการถูกวาดใหม่ทุก frame ควรพิจารณาใช้สิ่งใด?',
        options: ['เพิ่ม Opacity ครอบทั้งหน้า', 'RepaintBoundary แยกส่วนไอคอนออกเป็น layer', 'ย้ายทุกอย่างเข้า build() เดียว', 'ปิดการวาดของรายการด้วย setState'],
        answer: 1,
        explanation: 'RepaintBoundary แยก layer ของส่วนที่เคลื่อนไหว ช่วยไม่ให้รายการยาวถูก paint ซ้ำ แต่ไม่ควรใส่ทุกที่เพราะแต่ละ layer มีต้นทุนหน่วยความจำ',
        source: 'PDF หน้า 82–84',
      },
      {
        id: 17,
        topic: 'Testing / pyramid',
        chapter: 'บทที่ 8',
        prompt: 'ตามพีระมิดการทดสอบ ควรมี test ประเภทใดมากที่สุด?',
        options: ['Unit test', 'Widget test', 'Integration test', 'Golden test เท่านั้น'],
        answer: 0,
        explanation: 'Unit test เร็วที่สุดและทดสอบ logic ล้วน จึงควรมีมากที่สุด; integration ช้าและเปราะกว่า ควรเก็บเฉพาะเส้นทางสำคัญ',
        source: 'PDF หน้า 90–91',
      },
      {
        id: 18,
        topic: 'Testing / widget',
        chapter: 'บทที่ 8',
        prompt: 'ต้องการทดสอบว่าเมื่อ repository ล้มเหลว หน้าจอแสดง ErrorView และกด “ลองใหม่” แล้วเรียก fetchAll อีกครั้ง โดยไม่ใช้ emulator ควรใช้ test ใด?',
        options: ['Integration test บนอุปกรณ์จริงเท่านั้น', 'Golden test อย่างเดียว', 'Widget test โดย override provider เป็นของปลอม', 'ทดสอบด้วย print ใน build()'],
        answer: 2,
        explanation: 'Widget test ตรวจการแสดงผลและ interaction บนเครื่องพัฒนาได้โดยไม่ต้องมี emulator และใช้ provider override ควบคุม state ได้',
        source: 'PDF หน้า 96–98',
      },
      {
        id: 19,
        topic: 'Navigation / deep link',
        chapter: 'บทที่ 9',
        prompt: 'แนวคิดหลักของ go_router ในเอกสารคือข้อใด?',
        options: [
          'navigation ต้องสั่งด้วย Navigator.push เท่านั้น',
          'URL ใช้เฉพาะบนเว็บและไม่เกี่ยวกับ state',
          'deep link ต้องเปิดหน้าแรกก่อนเสมอ',
          'URL คือ state ของ navigation และ widget tree เป็นผลลัพธ์ของ URL นั้น',
        ],
        answer: 3,
        explanation: 'เมื่อ route ประกาศเป็นโครงสร้าง deep link และการ restore state หลังแอปถูก kill จะเป็นธรรมชาติขึ้น; go/push ใช้ตามความหมายของ stack ที่ต้องการ',
        source: 'PDF หน้า 103–106',
      },
      {
        id: 20,
        topic: 'Release / environments',
        chapter: 'บทที่ 10',
        prompt: 'ถ้าต้องปล่อยโค้ดชุดเดียวเป็น dev, staging และ prod ข้อใดจับคู่เครื่องมือได้ถูกต้องที่สุด?',
        options: [
          'ใช้ dart-define จัดการทุกความต่างระดับ native และใช้ flavor แค่เปลี่ยนสี',
          'ใส่ secret จริงไว้ใน dart-define เพราะถูก obfuscate แล้ว',
          'ใช้ flavor จัดการความต่างระดับ native และใช้ dart-define จัดการค่าฝั่ง Dart; secret จริงควรอยู่ฝั่ง server',
          'ใช้ debug key กับทุก environment เพื่อให้ติดตั้งง่าย',
        ],
        answer: 2,
        explanation: 'Flavor แยก application id, ชื่อ และไฟล์ native ตาม environment; dart-define ส่งค่าฝั่ง Dart ตอน compile แต่ค่าที่ฝังในแอปถือว่าสาธารณะ ไม่ใช่ที่เก็บ secret จริง',
        source: 'PDF หน้า 114–123',
      },
    ],
  },
  {
    id: 'mock-50',
    title: 'Mock สอบจริง 50 ข้อ',
    eyebrow: 'MOCK EXAM · 50 ITEMS',
    description: 'ซ้อมครบ 10 บทด้วยโจทย์แนวคิดและสถานการณ์ 50 ข้อ พร้อมเฉลยและเลขหน้าอ้างอิง',
    meta: 'ประมาณ 45–60 นาที',
    questions: [],
  },
];

examSets[1].questions = [...examSets[0].questions, ...mockExtraQuestions]
  .sort((a, b) => Number(a.chapter.replace('บทที่ ', '')) - Number(b.chapter.replace('บทที่ ', '')))
  .map((question, index) => ({ ...question, id: index + 1, options: [...question.options] }));

const app = document.querySelector('#app');
const letters = ['A', 'B', 'C', 'D'];
const learnerKeys = {
  profile: 'flutter-review-lab:v1:profile:',
  attempt: 'flutter-review-lab:v1:attempt:',
  selected: 'flutter-review-lab:v1:selected',
};
const sessionRecords = new Map();
let storageWarning = '';

function newRecordId() {
  return typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;
}

function validRecordId(id) {
  return typeof id === 'string' && /^[a-zA-Z0-9_-]{8,100}$/.test(id);
}

function validProfile(profile) {
  return profile && validRecordId(profile.id) && typeof profile.name === 'string'
    && profile.name.trim().length > 0 && profile.name.length <= 40;
}

function validAttempt(attempt) {
  return attempt && validRecordId(attempt.id) && validRecordId(attempt.profileId)
    && typeof attempt.profileName === 'string' && attempt.profileName.length <= 40
    && typeof attempt.setId === 'string' && typeof attempt.setTitle === 'string'
    && Number.isFinite(Date.parse(attempt.submittedAt))
    && Array.isArray(attempt.questions) && attempt.questions.length > 0
    && Array.isArray(attempt.answers) && attempt.answers.length === attempt.questions.length
    && attempt.questions.every((question, index) => question
      && Number.isInteger(question.id) && question.id > 0
      && ['prompt', 'topic', 'chapter', 'explanation', 'source'].every(field => typeof question[field] === 'string')
      && Array.isArray(question.options) && question.options.length === 4
      && question.options.every(option => typeof option === 'string')
      && Number.isInteger(question.answer) && question.answer >= 0 && question.answer < 4
      && Number.isInteger(attempt.answers[index]) && attempt.answers[index] >= 0 && attempt.answers[index] < 4);
}

function readRecords(prefix, validate) {
  const records = new Map();
  try {
    for (let index = 0; index < localStorage.length; index++) {
      const key = localStorage.key(index);
      if (!key?.startsWith(prefix)) continue;
      try {
        const record = JSON.parse(localStorage.getItem(key));
        if (!validate(record) || key !== `${prefix}${record.id}`) throw new Error('Invalid record');
        records.set(key, record);
      } catch {
        storageWarning = 'บางประวัติในเครื่องอ่านไม่ได้ ข้อมูลเดิมยังไม่ถูกลบหรือเขียนทับ';
      }
    }
  } catch {
    storageWarning = 'เบราว์เซอร์ไม่อนุญาตให้เก็บข้อมูล ชื่อและผลรอบนี้จะอยู่เฉพาะขณะเปิดหน้านี้';
  }
  // Each attempt has its own key, so another tab cannot overwrite a shared result list.
  sessionRecords.forEach((record, key) => {
    if (key.startsWith(prefix) && validate(record)) records.set(key, record);
  });
  return [...records.values()];
}

function writeRecord(key, record) {
  try {
    localStorage.setItem(key, JSON.stringify(record));
    sessionRecords.delete(key);
    return true;
  } catch {
    sessionRecords.set(key, record);
    storageWarning = 'บันทึกลงเครื่องไม่ได้ (พื้นที่เต็มหรือเบราว์เซอร์ปิดการเก็บข้อมูล) ผลนี้จะอยู่เฉพาะขณะเปิดหน้านี้';
    return false;
  }
}

function savedProfiles() {
  return readRecords(learnerKeys.profile, validProfile).sort((a, b) => a.name.localeCompare(b.name, 'th'));
}

function profileById(id) {
  return savedProfiles().find(profile => profile.id === id);
}

function selectedProfileId() {
  try { return localStorage.getItem(learnerKeys.selected); }
  catch { return null; }
}

const state = {
  screen: 'home',
  setId: 'trial-20',
  index: 0,
  answers: [],
  submitted: false,
  profileId: selectedProfileId(),
  profileFormMode: 'create',
  profileMessage: '',
  attemptProfileId: null,
  attemptProfileName: '',
  attemptId: null,
  resultAttempt: null,
  resultSaved: false,
};

function activeSet() {
  if (state.resultAttempt && (state.screen === 'result' || state.screen === 'review')) {
    return { id: state.resultAttempt.setId, title: state.resultAttempt.setTitle, questions: state.resultAttempt.questions };
  }
  return examSets.find((set) => set.id === state.setId) || examSets[0];
}

function activeProfile() {
  return profileById(state.profileId);
}

function chooseProfile(profileId) {
  if (state.screen === 'quiz' || !profileById(profileId)) return;
  state.profileId = profileId;
  state.profileFormMode = 'create';
  state.profileMessage = '';
  state.screen = 'home';
  try { localStorage.setItem(learnerKeys.selected, profileId); }
  catch { storageWarning = 'จำชื่อหลังปิดหน้าไม่ได้ แต่ยังทำข้อสอบในรอบนี้ได้'; }
  render();
}

function saveLearner(rawName) {
  if (state.screen !== 'home') return;
  const name = String(rawName).normalize('NFC').trim().replace(/\s+/g, ' ');
  if (!name || name.length > 40) {
    state.profileMessage = 'กรุณาใส่ชื่อ 1–40 ตัวอักษร';
    render();
    return;
  }
  const profiles = savedProfiles();
  const current = activeProfile();
  const renaming = state.profileFormMode === 'rename' && current;
  const duplicate = profiles.find(profile => profile.name.toLocaleLowerCase('th') === name.toLocaleLowerCase('th')
    && (!renaming || profile.id !== current.id));
  if (duplicate) {
    if (renaming) {
      state.profileMessage = 'ชื่อนี้ถูกใช้แล้ว กรุณาใช้ชื่อเล่นหรือเติมเลขท้ายให้ต่างกัน';
      render();
    } else {
      chooseProfile(duplicate.id);
      state.profileMessage = 'ชื่อนี้มีอยู่แล้ว เลือกชื่อเดิมให้แล้ว — ถ้าเป็นคนละคน ให้ใช้ชื่อที่ต่างกัน';
      render();
    }
    return;
  }
  const profile = renaming ? { ...current, name } : { id: newRecordId(), name, createdAt: new Date().toISOString() };
  const persisted = writeRecord(`${learnerKeys.profile}${profile.id}`, profile);
  chooseProfile(profile.id);
  state.profileMessage = persisted ? (renaming ? 'แก้ชื่อแล้ว ประวัติเดิมยังอยู่ครบ' : `พร้อมติวแล้ว ${name}`) : 'ใช้ชื่อนี้ได้ในรอบนี้ แต่ยังบันทึกลงเครื่องไม่ได้';
  render();
}

function attemptsForProfile(profileId) {
  return readRecords(learnerKeys.attempt, validAttempt)
    .filter(attempt => attempt.profileId === profileId)
    .sort((a, b) => Date.parse(b.submittedAt) - Date.parse(a.submittedAt));
}

function attemptScore(attempt) {
  return attempt.questions.reduce((total, question, index) => total + (attempt.answers[index] === question.answer ? 1 : 0), 0);
}

function formatAttemptDate(value) {
  return new Intl.DateTimeFormat('th-TH', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Asia/Bangkok' }).format(new Date(value));
}

function renderStorageWarning() {
  return storageWarning ? `<p class="storage-warning" role="status">${escapeHtml(storageWarning)}</p>` : '';
}

function renderLearnerBadge() {
  const name = state.resultAttempt?.profileName || state.attemptProfileName;
  return `<div class="learner-badge"><span>ผู้ทำข้อสอบ</span><strong>${escapeHtml(name)}</strong><small>ผลของรอบนี้จะอยู่ในชื่อนี้</small></div>`;
}

function renderProfilePanel() {
  const profiles = savedProfiles();
  const profile = activeProfile();
  const renaming = state.profileFormMode === 'rename' && profile;
  return `
    <section class="learner-panel" id="learner-panel" aria-labelledby="learner-heading">
      <div class="learner-panel-head"><div><p class="eyebrow">YOUR STUDY SPACE</p><h2 id="learner-heading">ใครกำลังติว?</h2><p>${profile ? 'ตรวจชื่อให้ถูกก่อนเริ่มสอบ ผลและประวัติจะไม่ปนกับคนอื่น' : 'เพิ่มหรือเลือกชื่อก่อนเริ่มทำข้อสอบ'}</p></div>
        ${profile ? `<button class="btn" data-action="history">ประวัติของ ${escapeHtml(profile.name)} →</button>` : ''}
      </div>
      ${profiles.length ? `<div class="learner-list" aria-label="เลือกผู้ทำข้อสอบ">${profiles.map(item => `<button class="learner-choice ${item.id === state.profileId ? 'current' : ''}" data-action="choose-profile" data-profile="${item.id}" aria-pressed="${item.id === state.profileId}"><span>${escapeHtml(item.name)}</span>${item.id === state.profileId ? '<small>กำลังใช้ชื่อนี้ ✓</small>' : ''}</button>`).join('')}</div>` : ''}
      <form class="learner-form" data-form="learner">
        <div class="learner-field"><label for="learner-name">${renaming ? 'แก้ชื่อผู้ทำ (ประวัติเดิมยังอยู่)' : 'เพิ่มชื่อผู้ทำ / ชื่อเล่น'}</label><input id="learner-name" name="learnerName" type="text" maxlength="40" required autocomplete="nickname" placeholder="เช่น ปาม หรือ เพื่อน A" value="${renaming ? escapeHtml(profile.name) : ''}" aria-describedby="learner-note" /></div>
        <button class="btn primary" type="submit">${renaming ? 'บันทึกชื่อใหม่' : 'เพิ่มชื่อและเลือกใช้'}</button>
        ${renaming ? '<button class="btn ghost" type="button" data-action="cancel-rename">ยกเลิก</button>' : profile ? '<button class="btn ghost" type="button" data-action="rename-profile">แก้ชื่อที่เลือก</button>' : ''}
      </form>
      ${state.profileMessage ? `<p class="learner-message" role="status">${escapeHtml(state.profileMessage)}</p>` : ''}
      <p class="learner-note" id="learner-note">เก็บในเบราว์เซอร์ของเครื่องนี้เท่านั้น ไม่ส่งชื่อหรือคะแนนขึ้นเว็บ • ไม่ใช่ระบบล็อกอิน คนใช้เครื่องเดียวกันสลับดูชื่อได้ • ล้างข้อมูลเบราว์เซอร์แล้วประวัติจะหาย</p>
      ${renderStorageWarning()}
    </section>`;
}

function renderHistory() {
  const profile = activeProfile();
  if (!profile) { state.screen = 'home'; renderHome(); return; }
  const attempts = attemptsForProfile(profile.id);
  app.innerHTML = `
    <section class="history-shell">
      <div class="section-head"><div><p class="eyebrow">PERSONAL HISTORY</p><h1>ประวัติของ <em>${escapeHtml(profile.name)}</em></h1><p>เฉพาะผลของชื่อนี้ในเบราว์เซอร์เครื่องนี้ • ${attempts.length} รอบ</p></div><button class="btn" data-action="home">← เลือกชื่อ / ทำข้อสอบ</button></div>
      ${renderStorageWarning()}
      <div class="history-list">${attempts.length ? attempts.map(attempt => {
        const points = attemptScore(attempt);
        const total = attempt.questions.length;
        return `<article class="history-card"><div><h2>${escapeHtml(attempt.setTitle)}</h2><p>${escapeHtml(formatAttemptDate(attempt.submittedAt))} · ชื่อที่ใช้สอบ: ${escapeHtml(attempt.profileName)}</p>${sessionRecords.has(`${learnerKeys.attempt}${attempt.id}`) ? '<small class="storage-warning">ยังไม่บันทึกลงเครื่อง อยู่เฉพาะขณะเปิดหน้านี้</small>' : ''}</div><div class="history-score"><strong>${points}/${total}</strong><span>${Math.round(points / total * 100)}%</span></div><button class="btn" data-action="open-attempt" data-attempt="${attempt.id}">ดูผลและเฉลย →</button></article>`;
      }).join('') : '<div class="empty-state"><h2>ยังไม่มีผลสอบของชื่อนี้</h2><p>เลือกชุดข้อสอบและส่งคำตอบครบ แล้วผลจะบันทึกไว้ที่นี่</p><button class="btn primary" data-action="home">เริ่มติว →</button></div>'}</div>
    </section>`;
}

function openAttempt(attemptId) {
  const attempt = attemptsForProfile(state.profileId).find(item => item.id === attemptId);
  if (!attempt) return;
  state.resultAttempt = attempt;
  state.answers = [...attempt.answers];
  state.setId = attempt.setId;
  state.attemptProfileId = attempt.profileId;
  state.attemptProfileName = attempt.profileName;
  state.attemptId = attempt.id;
  state.submitted = true;
  state.resultSaved = !sessionRecords.has(`${learnerKeys.attempt}${attempt.id}`);
  state.screen = 'result';
  render();
}

function answeredCount() {
  return state.answers.filter((answer) => answer !== null && answer !== undefined).length;
}

function score() {
  return activeSet().questions.reduce((total, question, index) => total + (state.answers[index] === question.answer ? 1 : 0), 0);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function setAnswers() {
  state.answers = Array(activeSet().questions.length).fill(null);
}

function renderHome() {
  const profile = activeProfile();
  app.innerHTML = `
    ${renderProfilePanel()}
    <section class="hero">
      <div>
        <p class="eyebrow">Study smarter · ship stronger</p>
        <h1>ติวให้รู้จริง<br />แล้ว <em>ลองสนาม</em></h1>
        <p class="hero-copy">แบบทดสอบ Responsive สำหรับ Advanced Flutter ออกแบบจากเอกสารสอบโดยตรง ให้เราและเพื่อนเห็นคะแนน คำตอบที่พลาด และหัวข้อที่ควรกลับไปทวน โดยแยกประวัติตามชื่อผู้ทำ</p>
        <div class="hero-notes">
          <span class="mini-note">4 ตัวเลือก</span>
          <span class="mini-note">ทีละข้อ</span>
          <span class="mini-note">เฉลยพร้อมเหตุผล</span>
          <span class="mini-note">ใช้บนมือถือได้</span>
        </div>
      </div>
      <div class="hero-art" aria-label="ภาพประกอบแผนที่เนื้อหา Advanced Flutter">
        <span class="art-label">THE EXAM MAP / 10 CHAPTERS</span>
        <div class="art-title">From <span>CRUD</span><br />to production-ready<br />Flutter.</div>
        <div class="art-lines">
          <div class="art-line"><b>01</b> state has one source of truth</div>
          <div class="art-line"><b>02</b> measure before you optimize</div>
          <div class="art-line"><b>03</b> ship with confidence</div>
        </div>
        <div class="art-sticker">50<br />QUESTIONS</div>
      </div>
    </section>

    <section aria-labelledby="set-heading">
      <div class="section-head">
        <div><h2 id="set-heading">เลือกสนามที่จะลง</h2><p>เช็กพื้นฐานด้วย 20 ข้อ หรือซ้อมครบทุกบทด้วย Mock 50 ข้อ</p></div>
        <span class="eyebrow">PICK A SET</span>
      </div>
      <div class="set-grid">
        ${examSets.map((set, index) => `
          <article class="set-card ${index === 0 ? 'primary' : ''} ${set.status === 'soon' ? 'disabled' : ''}">
            <div>
              <div class="set-kicker"><span>${escapeHtml(set.eyebrow)}</span><span class="tag ${set.status === 'soon' ? 'soon' : 'live'}">${set.status === 'soon' ? 'SOON' : 'READY'}</span></div>
              <h3>${escapeHtml(set.title)}</h3>
              <p>${escapeHtml(set.description)}</p>
            </div>
            <div class="set-foot">
              <span class="set-meta">${set.questions.length ? `${set.questions.length} ข้อ · ${escapeHtml(set.meta)}` : 'โครงสร้างพร้อมเติมข้อสอบ'}</span>
              <button class="btn primary" data-action="${profile ? 'start' : 'choose-learner'}" data-set="${set.id}" ${set.status === 'soon' ? 'disabled' : ''}>${set.status === 'soon' ? 'กำลังเตรียม' : profile ? 'เริ่มทำข้อสอบ →' : 'เลือกชื่อก่อนเริ่ม →'}</button>
            </div>
          </article>
        `).join('')}
      </div>
    </section>

    <div class="source-strip"><span class="source-icon">PDF</span><span>แหล่งหลัก: <strong>Advanced Flutter จาก CRUD สู่แอปที่รับงานจริงได้</strong> ฉบับปรับปรุง กันยายน 2569 · ครอบคลุม State Management, Architecture, Networking, Performance, Testing, Navigation และ Release</span></div>
  `;
}

function renderQuiz() {
  const navScrollLeft = app.querySelector('.nav-grid')?.scrollLeft || 0;
  const set = activeSet();
  const question = set.questions[state.index];
  const progress = ((state.index + 1) / set.questions.length) * 100;
  const selected = state.answers[state.index];
  const unanswered = state.answers.filter((answer) => answer === null || answer === undefined).length;
  const isLast = state.index === set.questions.length - 1;
  app.innerHTML = `
    <section class="quiz-shell">
      ${renderLearnerBadge()}
      ${renderStorageWarning()}
      <div class="quiz-header">
        <div><p class="eyebrow">${escapeHtml(set.eyebrow)}</p><h1>${escapeHtml(set.title)}</h1><p>เลือกคำตอบที่ดีที่สุดจากเอกสาร แล้วกดส่งเมื่อทำครบ</p></div>
        <div class="quiz-counter">${String(state.index + 1).padStart(2, '0')} / ${set.questions.length}</div>
      </div>
      <div class="progress-track" aria-label="ความคืบหน้า"><span style="width:${progress}%"></span></div>
      <div class="quiz-layout">
        <aside class="question-nav" aria-label="ตัวนำทางข้อสอบ">
          <h2>แผนที่ข้อสอบ</h2><p>${answeredCount()} จาก ${set.questions.length} ข้อที่ตอบแล้ว</p>
          <div class="nav-grid" tabindex="0" aria-label="เลื่อนเพื่อเลือกข้อสอบ">
            ${set.questions.map((item, index) => `<button class="nav-dot ${index === state.index ? 'current' : ''} ${state.answers[index] !== null && state.answers[index] !== undefined ? 'answered' : ''}" data-action="jump" data-index="${index}" aria-label="ไปข้อ ${index + 1}">${index + 1}</button>`).join('')}
          </div>
          <div class="nav-legend"><span class="legend-item"><i class="legend-swatch current"></i>กำลังทำ</span><span class="legend-item"><i class="legend-swatch answered"></i>ตอบแล้ว</span></div>
        </aside>
        <article class="question-card">
          <div class="question-meta"><span class="question-topic">${escapeHtml(question.chapter)} · ${escapeHtml(question.topic)}</span><span>ข้อ ${question.id}</span></div>
          <h2>${escapeHtml(question.prompt)}</h2>
          <div class="options" role="radiogroup" aria-label="ตัวเลือกคำตอบ">
            ${question.options.map((option, optionIndex) => `<button class="option ${selected === optionIndex ? 'selected' : ''}" data-action="answer" data-option="${optionIndex}" role="radio" aria-checked="${selected === optionIndex}"><span class="option-letter">${letters[optionIndex]}</span><span class="option-text">${escapeHtml(option)}</span></button>`).join('')}
          </div>
          ${unanswered && isLast ? `<p class="unanswered-hint">ยังเหลือ ${unanswered} ข้อที่ไม่ได้ตอบ — กลับไปเลือกจากแผนที่ข้อสอบได้</p>` : ''}
          <div class="question-actions">
            <button class="btn ghost" data-action="home">← ออกจากชุดนี้</button>
            <div class="action-right">
              <button class="btn" data-action="previous" ${state.index === 0 ? 'disabled' : ''}>← ก่อนหน้า</button>
              ${isLast ? `<button class="btn primary" data-action="submit" ${unanswered ? 'disabled' : ''}>ส่งคำตอบ ✓</button>` : `<button class="btn primary" data-action="next">ถัดไป →</button>`}
            </div>
          </div>
        </article>
      </div>
    </section>
  `;
  // Keep only the navigation strip scrolled, not the whole mobile page.
  const navGrid = app.querySelector('.nav-grid');
  const currentButton = navGrid?.querySelector('.current');
  if (navGrid && currentButton && navGrid.scrollWidth > navGrid.clientWidth) {
    navGrid.scrollLeft = navScrollLeft;
    const strip = navGrid.getBoundingClientRect();
    const button = currentButton.getBoundingClientRect();
    if (button.left < strip.left) navGrid.scrollLeft -= strip.left - button.left;
    if (button.right > strip.right) navGrid.scrollLeft += button.right - strip.right;
  }
}

function resultTopics() {
  const map = new Map();
  activeSet().questions.forEach((question, index) => {
    if (!map.has(question.topic)) map.set(question.topic, { total: 0, wrong: 0 });
    const item = map.get(question.topic);
    item.total += 1;
    if (state.answers[index] !== question.answer) item.wrong += 1;
  });
  return [...map.entries()].sort((a, b) => b[1].wrong - a[1].wrong);
}

function renderReviewCard(question, index) {
  const picked = state.answers[index];
  const isCorrect = picked === question.answer;
  return `
    <article class="review-card ${isCorrect ? '' : 'wrong'}">
      <div class="review-top"><h3>${question.id}. ${escapeHtml(question.prompt)}</h3><span class="review-status ${isCorrect ? 'correct' : 'wrong'}">${isCorrect ? 'ตอบถูก' : 'ควรทวน'}</span></div>
      <div class="review-answer"><span>คำตอบของเรา: <strong>${picked === null || picked === undefined ? 'ไม่ได้ตอบ' : `${letters[picked]}. ${escapeHtml(question.options[picked])}`}</strong></span><span>เฉลย: <strong>${letters[question.answer]}. ${escapeHtml(question.options[question.answer])}</strong></span></div>
      <p class="explanation"><strong>ทำไม:</strong> ${escapeHtml(question.explanation)}</p>
      <span class="source-ref">อ้างอิง ${escapeHtml(question.source)}</span>
    </article>
  `;
}

function renderResult() {
  const set = activeSet();
  const total = set.questions.length;
  const points = score();
  const percent = Math.round((points / total) * 100);
  const wrong = total - points;
  const topics = resultTopics();
  const wrongTopics = topics.filter(([, info]) => info.wrong > 0);
  const topicSummary = wrongTopics.length
    ? wrongTopics.map(([topic, info]) => `<div class="topic-row"><div><div class="topic-name">${escapeHtml(topic)}</div><div class="topic-bar"><span style="width:${(info.wrong / info.total) * 100}%"></span></div></div><span class="topic-score">พลาด ${info.wrong}</span></div>`).join('')
    : '<div class="empty-state"><h2>ครบทุกหัวข้อแล้ว 🎉</h2><p>รอบนี้ยังไม่มีหัวข้อที่ต้องกลับไปทวน</p></div>';
  app.innerHTML = `
    <section class="result-shell">
      ${renderLearnerBadge()}
      <p class="attempt-save-note" role="status">${state.resultSaved ? `บันทึกผลในประวัติของ ${escapeHtml(profileById(state.attemptProfileId)?.name || state.attemptProfileName)} แล้ว` : 'ยังบันทึกลงเครื่องไม่ได้ อย่าปิดหน้านี้หากยังต้องการดูผล'}${state.resultAttempt ? ` · ${escapeHtml(formatAttemptDate(state.resultAttempt.submittedAt))}` : ''}</p>
      ${renderStorageWarning()}
      <div class="result-hero">
        <div>
          <p class="eyebrow">RESULTS · ${escapeHtml(set.title)}</p>
          <h1>สนามนี้ทำได้<br /><em>${points}/${total}</em> คะแนน</h1>
          <p class="result-copy">${percent >= 80 ? 'พื้นฐานแน่นมาก — กลับไปเก็บรายละเอียดข้อที่พลาด แล้วลองทำซ้ำให้มั่นใจ' : percent >= 55 ? 'โครงสร้างหลักเริ่มมาแล้ว — ทวนหัวข้อสีส้มก่อน แล้วลองทำซ้ำเพื่อจับ pattern ให้แม่นขึ้น' : 'ไม่เป็นไร นี่คือแผนที่สำหรับอ่านต่อ — เริ่มจากหัวข้อที่ผิดบ่อยที่สุด แล้วกลับมาลองอีกครั้ง'}</p>
          <div class="result-actions"><button class="btn primary" data-action="review">ดูเฉลยและคำอธิบาย ↓</button><button class="btn" data-action="retry">ทำชุดนี้ใหม่</button><button class="btn" data-action="history">ประวัติของชื่อนี้</button><button class="btn ghost" data-action="home">เลือกชื่อ / ชุดอื่น</button></div>
        </div>
        <div class="score-ring" style="--score:${percent}" aria-label="ได้ ${points} จาก ${total} คะแนน"><div class="score-inner"><span class="score-number">${percent}%</span><span class="score-sub">${wrong ? `${wrong} ข้อควรทวน` : 'ครบทุกข้อ'}</span></div></div>
      </div>

      <div class="result-grid">
        <section class="result-panel"><h2>หัวข้อที่ควรกลับไปทวน</h2><div class="topic-list">${topicSummary}</div></section>
        <section class="result-panel"><h2>สรุปการทำข้อสอบ</h2><div class="topic-list"><div class="topic-row"><span class="topic-name">ตอบถูก</span><strong class="topic-score" style="color:var(--mint-strong)">${points}</strong></div><div class="topic-row"><span class="topic-name">ควรทวน</span><strong class="topic-score">${wrong}</strong></div><div class="topic-row"><span class="topic-name">ความคืบหน้า</span><strong class="topic-score" style="color:var(--accent-dark)">${answeredCount()}/${total}</strong></div></div></section>
      </div>

      <div class="review-heading" id="review"><h2>เฉลยทีละข้อ</h2><span>อ่านเหตุผล แล้วจดคำหลอกที่ตัวเองพลาด</span></div>
      <div class="review-list">${set.questions.map(renderReviewCard).join('')}</div>
    </section>
  `;
}

function render() {
  if (state.screen === 'home') renderHome();
  if (state.screen === 'quiz') renderQuiz();
  if (state.screen === 'result') renderResult();
  if (state.screen === 'review') renderResult();
  if (state.screen === 'history') renderHistory();
  if (state.screen === 'result' || state.screen === 'review') window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startSet(setId) {
  const set = examSets.find((item) => item.id === setId);
  if (!set || !set.questions.length) return;
  const profile = activeProfile();
  if (!profile) {
    state.profileMessage = 'เลือกหรือเพิ่มชื่อก่อนเริ่มสอบ เพื่อให้ผลไม่ปนกับคนอื่น';
    state.screen = 'home';
    render();
    document.querySelector('#learner-name')?.focus();
    return;
  }
  state.setId = setId;
  state.index = 0;
  state.submitted = false;
  state.resultAttempt = null;
  state.resultSaved = false;
  state.attemptId = newRecordId();
  state.attemptProfileId = profile.id;
  state.attemptProfileName = profile.name;
  setAnswers();
  state.screen = 'quiz';
  render();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function submitExam() {
  if (state.screen !== 'quiz' || state.submitted) return;
  if (state.answers.some((answer) => answer === null || answer === undefined)) {
    state.index = state.answers.findIndex((answer) => answer === null || answer === undefined);
    render();
    return;
  }
  state.submitted = true;
  const set = activeSet();
  state.resultAttempt = {
    id: state.attemptId,
    profileId: state.attemptProfileId,
    profileName: state.attemptProfileName,
    setId: set.id,
    setTitle: set.title,
    submittedAt: new Date().toISOString(),
    answers: [...state.answers],
    questions: set.questions.map(question => ({ ...question, options: [...question.options] })),
  };
  state.resultSaved = writeRecord(`${learnerKeys.attempt}${state.attemptId}`, state.resultAttempt);
  state.screen = 'result';
  render();
}

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action]');
  if (!target) return;
  const action = target.dataset.action;
  if (action === 'choose-profile') { chooseProfile(target.dataset.profile); return; }
  if (action === 'choose-learner') {
    state.profileMessage = 'เพิ่มหรือเลือกชื่อที่ช่องด้านบนก่อนนะ';
    state.screen = 'home'; render(); document.querySelector('#learner-name')?.focus(); return;
  }
  if (action === 'rename-profile' || action === 'cancel-rename') {
    if (state.screen !== 'home') return;
    state.profileFormMode = action === 'rename-profile' ? 'rename' : 'create';
    state.profileMessage = ''; render(); document.querySelector('#learner-name')?.focus(); return;
  }
  if (action === 'history') {
    if (state.screen === 'quiz') return;
    if (state.resultAttempt && (state.screen === 'result' || state.screen === 'review')) state.profileId = state.attemptProfileId;
    state.screen = 'history'; render(); window.scrollTo({ top: 0, behavior: 'instant' }); return;
  }
  if (action === 'open-attempt') { if (state.screen === 'history') openAttempt(target.dataset.attempt); return; }
  if (action === 'home') { state.screen = 'home'; render(); return; }
  if (action === 'start') { startSet(target.dataset.set); return; }
  if (action === 'answer') {
    const option = Number(target.dataset.option);
    if (state.screen !== 'quiz' || !Number.isInteger(option) || option < 0 || option > 3) return;
    state.answers[state.index] = option; render(); return;
  }
  if (action === 'jump') {
    const index = Number(target.dataset.index);
    if (state.screen !== 'quiz' || !Number.isInteger(index) || index < 0 || index >= activeSet().questions.length) return;
    state.index = index; render(); return;
  }
  if (action === 'previous') { if (state.screen !== 'quiz') return; state.index = Math.max(0, state.index - 1); render(); return; }
  if (action === 'next') { if (state.screen !== 'quiz') return; state.index = Math.min(activeSet().questions.length - 1, state.index + 1); render(); return; }
  if (action === 'submit') { submitExam(); return; }
  if (action === 'retry') { startSet(state.setId); return; }
  if (action === 'review') { state.screen = 'review'; render(); document.querySelector('#review')?.scrollIntoView({ behavior: 'smooth' }); }
});

document.addEventListener('submit', (event) => {
  const form = event.target.closest('[data-form="learner"]');
  if (!form) return;
  event.preventDefault();
  saveLearner(form.elements.learnerName.value);
});

render();
