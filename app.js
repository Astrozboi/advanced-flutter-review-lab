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
    description: 'พื้นที่สำหรับชุดเต็มในรอบถัดไป โดยใช้หน้าจอและระบบตรวจชุดเดียวกัน',
    meta: 'เร็ว ๆ นี้',
    status: 'soon',
    questions: [],
  },
];

const app = document.querySelector('#app');
const letters = ['A', 'B', 'C', 'D'];
const state = {
  screen: 'home',
  setId: 'trial-20',
  index: 0,
  answers: [],
  submitted: false,
};

function activeSet() {
  return examSets.find((set) => set.id === state.setId) || examSets[0];
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
  app.innerHTML = `
    <section class="hero">
      <div>
        <p class="eyebrow">Study smarter · ship stronger</p>
        <h1>ติวให้รู้จริง<br />แล้ว <em>ลองสนาม</em></h1>
        <p class="hero-copy">แบบทดสอบ Responsive สำหรับ Advanced Flutter ออกแบบจากเอกสารสอบโดยตรง ให้ปามเห็นทั้งคะแนน คำตอบที่พลาด และหัวข้อที่ควรกลับไปทวน</p>
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
        <div class="art-sticker">20<br />QUESTIONS</div>
      </div>
    </section>

    <section aria-labelledby="set-heading">
      <div class="section-head">
        <div><h2 id="set-heading">เลือกสนามที่จะลง</h2><p>เริ่มจากชุดทดลอง แล้วค่อยเพิ่ม Mock 50 ข้อได้ในข้อมูลชุดเดียวกัน</p></div>
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
              <button class="btn primary" data-action="start" data-set="${set.id}" ${set.status === 'soon' ? 'disabled' : ''}>${set.status === 'soon' ? 'กำลังเตรียม' : 'เริ่มทำข้อสอบ →'}</button>
            </div>
          </article>
        `).join('')}
      </div>
    </section>

    <div class="source-strip"><span class="source-icon">PDF</span><span>แหล่งหลัก: <strong>Advanced Flutter จาก CRUD สู่แอปที่รับงานจริงได้</strong> ฉบับปรับปรุง กันยายน 2569 · ครอบคลุม State Management, Architecture, Networking, Performance, Testing, Navigation และ Release</span></div>
  `;
}

function renderQuiz() {
  const set = activeSet();
  const question = set.questions[state.index];
  const progress = ((state.index + 1) / set.questions.length) * 100;
  const selected = state.answers[state.index];
  const unanswered = state.answers.filter((answer) => answer === null || answer === undefined).length;
  const isLast = state.index === set.questions.length - 1;
  app.innerHTML = `
    <section class="quiz-shell">
      <div class="quiz-header">
        <div><p class="eyebrow">${escapeHtml(set.eyebrow)}</p><h1>${escapeHtml(set.title)}</h1><p>เลือกคำตอบที่ดีที่สุดจากเอกสาร แล้วกดส่งเมื่อทำครบ</p></div>
        <div class="quiz-counter">${String(state.index + 1).padStart(2, '0')} / ${set.questions.length}</div>
      </div>
      <div class="progress-track" aria-label="ความคืบหน้า"><span style="width:${progress}%"></span></div>
      <div class="quiz-layout">
        <aside class="question-nav" aria-label="ตัวนำทางข้อสอบ">
          <h2>แผนที่ข้อสอบ</h2><p>${answeredCount()} จาก ${set.questions.length} ข้อที่ตอบแล้ว</p>
          <div class="nav-grid">
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
      <div class="result-hero">
        <div>
          <p class="eyebrow">RESULTS · ${escapeHtml(set.title)}</p>
          <h1>สนามนี้ทำได้<br /><em>${points}/${total}</em> คะแนน</h1>
          <p class="result-copy">${points >= 16 ? 'พื้นฐานแน่นมาก — ลองกลับไปเก็บรายละเอียดจุดหลอก แล้วค่อยลุย Mock 50 ข้อ' : points >= 11 ? 'โครงสร้างหลักเริ่มมาแล้ว — ทวนหัวข้อสีส้มก่อน แล้วลองทำซ้ำเพื่อจับ pattern ให้แม่นขึ้น' : 'ไม่เป็นไร นี่คือแผนที่สำหรับอ่านต่อ — เริ่มจากหัวข้อที่ผิดบ่อยที่สุด แล้วกลับมาลองอีกครั้ง'}</p>
          <div class="result-actions"><button class="btn primary" data-action="review">ดูเฉลยและคำอธิบาย ↓</button><button class="btn" data-action="retry">ทำชุดนี้ใหม่</button><button class="btn ghost" data-action="home">เลือกชุดอื่น</button></div>
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
  if (state.screen === 'result' || state.screen === 'review') window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startSet(setId) {
  const set = examSets.find((item) => item.id === setId);
  if (!set || !set.questions.length) return;
  state.setId = setId;
  state.index = 0;
  state.submitted = false;
  setAnswers();
  state.screen = 'quiz';
  render();
}

function submitExam() {
  if (state.answers.some((answer) => answer === null || answer === undefined)) {
    state.index = state.answers.findIndex((answer) => answer === null || answer === undefined);
    render();
    return;
  }
  state.submitted = true;
  state.screen = 'result';
  render();
}

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action]');
  if (!target) return;
  const action = target.dataset.action;
  if (action === 'home') { state.screen = 'home'; render(); return; }
  if (action === 'start') { startSet(target.dataset.set); return; }
  if (action === 'answer') { state.answers[state.index] = Number(target.dataset.option); render(); return; }
  if (action === 'jump') { state.index = Number(target.dataset.index); render(); return; }
  if (action === 'previous') { state.index = Math.max(0, state.index - 1); render(); return; }
  if (action === 'next') { state.index = Math.min(activeSet().questions.length - 1, state.index + 1); render(); return; }
  if (action === 'submit') { submitExam(); return; }
  if (action === 'retry') { startSet(state.setId); return; }
  if (action === 'review') { state.screen = 'review'; render(); document.querySelector('#review')?.scrollIntoView({ behavior: 'smooth' }); }
});

render();
