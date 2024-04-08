function WarningBadge({ onClose }) {
  // 我草死你的妈，能不能记得在他妈的parameter外面扩上那个该死的{}
  return (
    <div class="alert alert-warning alert-dismissible" role="alert">
      <strong>What happened?</strong>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
}

export default WarningBadge;
