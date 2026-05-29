class Node {
    constructor(d){
        this.data=d;
        this.next=null;
    }
}

function adaSiklus(head) {
    let lambat = head;
    let cepat = head;
    while (cepat && cepat.next){
        lambat = lambat.next;
        cepat = cepat.next.next;
        if (lambat === cepat) return true;
    }
    return false;
}

function mergeTerurut(head1, head2) {
    const dummy = new Node(0);
    let current = dummy;
    while (head1 && head2) {
        if(head1.data <= head2.data) {
            current.next = head1;
            head1 = head1.next;
        }else{
            current.next = head2;
            head2 = head2.next;
    }
    current = current.next;
    }
    
    current.next = head1 || head2;
    return dummy.next;
}

function buatList(arr) {
    if (!arr.length) return null;
    const head = new Node(arr[0]);
    let cur = head;
    for (let i=1;i<arr.length;i++){
        cur.next=new Node(arr[i]);
        cur = cur.next;
    }
    return head;
}

function cetakList(head) {
    let s='', cur = head;
    while(cur){
        s += cur.next?`[${cur.data}]→`:`[${cur.data}]`;cur=cur.next;}
        console.log('',s);
    }
    
const A = buatList([1,2,3,4,5]);
console.log('ada siklus (seharusnya false):', adaSiklus(A));

A.next.next.next.next.next = A.next;
console.log('ada siklus (seharusnya true) :', adaSiklus(A));

const l1 = buatList([1,3,5,7,9]);
const l2 = buatList([2,4,6,8,10]);
console.log('\nlist 1:'); cetakList(l1);
console.log('list 2:'); cetakList(l2);
const merged = mergeTerurut(l1, l2);
console.log('merged:'); cetakList(merged);
